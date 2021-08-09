import React, { useEffect, useReducer } from "react"
import { API, graphqlOperation } from "aws-amplify"
//import uuid from "uuid/v4"
import videoReducer from "../../reducers/videoReducer"
import { listVideos as ListVideos } from "../../graphql/queries"
import { createVideo as CreateVideo } from "../../graphql/mutations"
import AddVideoPage from "./AddVideoPage"

//const USER_ID = uuid()

const initialState = []

const AddVideo = () => {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  useEffect(() => {
    const getData = async () => {
      try {
        const videoData = await API.graphql(graphqlOperation(ListVideos))
        console.log("data from API:", videoData)
        dispatch({ type: "SET_VIDEOS", videos: videoData.data.listVideos.items })
      } catch (err) {
        console.log("error fetching videos...", err.message)
      }
    }

    getData()
  }, [dispatch])

  const storeFile = async (file) => {
    if (file) {
      await Storage.input(file.name, file)
      return file.name
    }

    return
  }

  const createVideo = async (obj) => {
    const newVideo = {
      ...obj,
      imgUrl: storeFile(obj.imgUrl),
    }
    dispatch({ type: "CREATE_VIDEO", video: newVideo })

    try {
      await API.graphql(graphqlOperation(CreateVideo, { input: obj }))
      console.log("video created!")
      dispatch({ type: "CREATE_VIDEO", video: obj })
    } catch (err) {
      console.log("error creating video...", err.message)
    }
  }

  return (
    <div>
      <AddVideoPage handleCreateVideo={createVideo} />
    </div>
  )
}

export default AddVideo
