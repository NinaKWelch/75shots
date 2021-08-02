//import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import VideoPage from "./VideoPage"
import StudentPage from "./StudentPage"
import ClassPage from "./ClassPage"

const DasboardWeb = ({ value, handleSelect }) => (
  <Row>
    <Col as="nav" lg={3} className="admin-sidebar bg-light">
      <Nav
        as="ul"
        activeKey={value}
        onSelect={(selectedKey) => handleSelect(selectedKey)}
        className="pt-2 flex-column"
      >
        <Nav.Item as="li">
          <Nav.Link eventKey="videos">Videos</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="students">Students</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="classes">Classes</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col as="main" lg={9} className="admin-content">
      {value === "videos" && <VideoPage />}
      {value === "students" && <StudentPage />}
      {value === "classes" && <ClassPage />}
    </Col>
  </Row>
)

export default DasboardWeb
