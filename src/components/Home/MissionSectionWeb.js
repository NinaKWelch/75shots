import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const MissionSectionWeb = () => {
  return (
    <Row className="bg-mission">
      <Col xs={5} className="px-5 bg-mission-overlay">
        <Row className="px-5 bg-mission-overlay-content">
          <h2>75Shots is...</h2>
          <h3>Mission Statement</h3>
        </Row>
      </Col>
    </Row>
  )
}

export default MissionSectionWeb
