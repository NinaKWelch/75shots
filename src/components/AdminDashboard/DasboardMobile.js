import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import VideoPage from "./VideoPage"
import StudentPage from "./StudentPage"
import ClassPage from "./ClassPage"

const DasboardMobile = () => {
  const [value, setValue] = useState("videos")

  return (
    <Row className="pt-3">
      <Col xs={12}>
        <Form.Select
          onChange={(e) => setValue(e.target.value)}
          aria-label="Select page to view"
          size="lg"
        >
          <option value="videos">Videos</option>
          <option value="students">Students</option>
          <option value="classes">Classes</option>
        </Form.Select>
      </Col>
      <Col xs={12} className="p-3">
        {value === "videos" && <VideoPage />}
        {value === "students" && <StudentPage />}
        {value === "classes" && <ClassPage />}
      </Col>
    </Row>
  )
}

export default DasboardMobile
