import { Link as RouterLink, useRouteMatch } from "react-router-dom"
import Nav from "react-bootstrap/Nav"

const AdminMenu = () => {
  const match = useRouteMatch()

  return (
    <div className="position-fixed w-100 bg-white border-bottom admin-menu-container">
      <Nav as="ul" className="justify-content-around admin-menu">
        <Nav.Item as="li">
          <Nav.Link as={RouterLink} to={`${match.url}/add-video`}>
            Add Video
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={RouterLink} to={`${match.url}/videos`}>
            Videos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={RouterLink} to={`${match.url}/students`}>
            Students
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={RouterLink} to={`${match.url}/classes`}>
            Classes
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default AdminMenu
