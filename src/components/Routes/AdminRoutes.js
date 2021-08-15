import { Switch, Route, useRouteMatch } from "react-router-dom"
import AdminAddVideo from "../AdminAddVideo"
import AdminVideos from "../AdminVideos"
import AdminStudents from "../AdminStudents"
import AdminClasses from "../AdminClasses"

const AdminRoutes = ({
  videos,
  handleCreateVideo,
  handleDeleteVideo,
  handleUpdateVideo,
}) => {
  // match route to admin path
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/add-video`}>
        <AdminAddVideo
          handleCreateVideo={handleCreateVideo}
          handleUpdateVideo={handleUpdateVideo}
        />
      </Route>
      <Route path={`${match.path}/videos`}>
        <AdminVideos videos={videos} handleDeleteVideo={handleDeleteVideo} />
      </Route>
      <Route path={`${match.path}/students`}>
        <AdminStudents />
      </Route>
      <Route path={`${match.path}/classes`}>
        <AdminClasses />
      </Route>
    </Switch>
  )
}

export default AdminRoutes
