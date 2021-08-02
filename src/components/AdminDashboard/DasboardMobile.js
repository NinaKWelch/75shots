import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import VideoPage from "./VideoPage"
import StudentPage from "./StudentPage"
import ClassPage from "./ClassPage"

const DasboardMobile = ({ value, handleSelect }) => (
  <Row className="position-relative">
    <Col xs={12} className="admin-select bg-white pt-1 pb-3">
      <Form.Select
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        aria-label="Select page to view"
        size="lg"
      >
        <option value="videos">Videos</option>
        <option value="students">Students</option>
        <option value="classes">Classes</option>
      </Form.Select>
    </Col>
    <Col xs={12} className="mt-72">
      {value === "videos" && <VideoPage />}
      {value === "students" && <StudentPage />}
      {value === "classes" && <ClassPage />}
    </Col>
  </Row>
)

export default DasboardMobile
