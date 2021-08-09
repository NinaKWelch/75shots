import React, { useEffect, useReducer } from "react"
import { API, Storage, graphqlOperation } from "aws-amplify"
import videoReducer from "../../reducers/videoReducer"
import { listVideos as ListVideos } from "../../graphql/queries"
import { deleteVideo as DeleteVideo } from "../../graphql/mutations"
import VideoList from "./VideoList"
//import AddVideoButton from "../AddVideo/AddVideoButton"

const initialState = []

const VideoPage = () => {
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

  const deleteVideo = async (id) => {
    try {
      await API.graphql(graphqlOperation(DeleteVideo, { input: { id } }))
      dispatch({ type: "DELETE_VIDEO", videoId: id })
      console.log("video deleted")
    } catch (err) {
      console.log("error deleting video...", err.message)
    }
  }

  return (
    <div className="position-relative">
      <VideoList videos={state} handleDeleteVideo={deleteVideo} />
      {/*<div className="position-fixed bottom-0 end-0 px-2 pb-2">
        <AddVideoButton />
      </div>*/}
    </div>
  )
}

export default VideoPage
