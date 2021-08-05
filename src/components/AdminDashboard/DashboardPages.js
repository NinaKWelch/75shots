import AddVideo from "../AddVideo"
import VideoPage from "./VideoPage"
import StudentPage from "./StudentPage"
import ClassPage from "./ClassPage"

const DashboardPages = ({ value }) => (
  <>
    {value === "add-video" && <AddVideo />}
    {value === "videos" && <VideoPage />}
    {value === "students" && <StudentPage />}
    {value === "classes" && <ClassPage />}
  </>
)

export default DashboardPages
