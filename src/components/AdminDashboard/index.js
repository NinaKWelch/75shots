import React, { useEffect, useReducer } from "react"
import { getVideos, createVideo, deleteVideo } from "../../services/videos"
import videoReducer from "../../reducers/videoReducer"
import AdminMenu from "./AdminMenu"
import AdminRoutes from "../Routes/AdminRoutes"

const initialState = []

const AdminDashboard = () => {
  const [state, dispatch] = useReducer(videoReducer, initialState)

  useEffect(() => {
    const getData = async () => {
      const data = await getVideos()
      if (data !== "error") {
        dispatch({ type: "SET_VIDEOS", videos: data })
      }
    }

    getData()
  }, [dispatch])

  const handleCreateVideo = async (data) => {
    const response = await createVideo(data)
    if (response !== "error") {
      dispatch({ type: "CREATE_VIDEO", video: data })
    }
  }

  const handleDeleteVideo = async (id) => {
    const response = await deleteVideo(id)
    if (response !== "error") {
      dispatch({ type: "DELETE_VIDEO", videoId: id })
    }
  }

  const handleUpdateVideo = () => {
    //TODO
  }

  return (
    <div className="mt-72 position-relative">
      <AdminMenu />
      <AdminRoutes
        videos={state}
        handleCreateVideo={handleCreateVideo}
        handleDeleteVideo={handleDeleteVideo}
        handleUpdateVideo={handleUpdateVideo}
      />
    </div>
  )
}

export default AdminDashboard
