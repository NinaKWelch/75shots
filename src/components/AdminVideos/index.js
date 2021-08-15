import AdminPage from "../AdminDashboard/AdminPage"
import VideoList from "./VideoList"

const AdminVideos = ({ videos, handleDeleteVideo }) => {
  return (
    <AdminPage title="Videos">
      {videos.length > 0 && (
        <VideoList videos={videos} handleDeleteVideo={handleDeleteVideo} />
      )}
      {videos.length === 0 && <h3>No videos as yet</h3>}
    </AdminPage>
  )
}

export default AdminVideos
