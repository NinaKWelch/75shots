import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MissionSectionText from "./MissionSectionText"

const MissionSectionWeb = () => (
  <Row className="bg-mission">
    <Col xs={5} md={6} lg="7" className="bg-mission-overlay">
      <Row className="h-100 align-items-center bg-mission-overlay-content">
        <MissionSectionText mobile={false} />
      </Row>
    </Col>
  </Row>
)

export default MissionSectionWeb
