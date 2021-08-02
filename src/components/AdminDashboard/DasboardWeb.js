import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import VideoPage from "./VideoPage"
import StudentPage from "./StudentPage"
import ClassPage from "./ClassPage"

const DasboardWeb = () => {
  return (
    <Tab.Container id="nav-admin" defaultActiveKey="videos">
      <Row>
        <Col md={3} className="bg-light">
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="videos">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="students">Students</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="classes">Classes</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="videos">
              <VideoPage />
            </Tab.Pane>
            <Tab.Pane eventKey="students">
              <StudentPage />
            </Tab.Pane>
            <Tab.Pane eventKey="classes">
              <ClassPage />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default DasboardWeb
