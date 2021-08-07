import React, { useEffect, useReducer } from "react"
import { API, graphqlOperation } from "aws-amplify"
//import uuid from "uuid/v4"
import videoReducer from "../../reducers/videoReducer"
import { createVideo as CreateVideo } from "../../graphql/mutations"
import { listVideos as ListVideos } from "../../graphql/queries"
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

  const createVideo = async (obj) => {
    dispatch({ type: "CREATE_VIDEO", video: obj })

    try {
      await API.graphql(graphqlOperation(CreateVideo, { input: obj }))
      console.log("video created!")
    } catch (err) {
      console.log("error creating video...", err.message)
    }
  }

  /*const deleteVideo = async (obj) => {
    dispatch({ type: "DELETE_VIDEO", video: obj })

    try {

    } catch (err) {
      console.log("error createing video...", err.message)
    }
  }
  */

  return (
    <div>
      <AddVideoPage handleCreateVideo={createVideo} />
    </div>
  )
}

export default AddVideo
