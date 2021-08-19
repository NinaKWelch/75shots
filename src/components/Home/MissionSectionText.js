import { Link } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const MissionSectionText = ({ mobile }) => (
  <Col xs={{ span: 8, offset: 2 }}>
    <h2 className="mb-4 fs-1 lh-1 text-uppercase">
      <span className="fw-bolder">Shooting Down Hatered </span>
      <span className="fw-lighter">One Shot at a Time</span>
    </h2>
    <Button
      as={Link}
      to="/about"
      variant={mobile === true ? "primary" : "outline-primary"}
      size="lg"
    >
      Learn More
    </Button>
  </Col>
)

export default MissionSectionText
