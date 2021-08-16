import { Link } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

const AcademySectionText = () => (
  <Col xs={12} md={6}>
    <Row>
      <Col xs={{ span: 8, offset: 2 }} className="pt-5">
        <h3 className="mb-5 fs-2 lh-1 text-uppercase">
          <span className="fw-lighter">Pocket Cinema is the </span>
          <span className="fw-bolder">...</span>
        </h3>
      </Col>
      <Col xs={{ span: 8, offset: 2 }}>
        <Button variant="primary" size="lg" className="mr-1">
          Apply
        </Button>{" "}
        <Button
          as={Link}
          to="/pocket-cinema"
          variant="outline-primary"
          size="lg"
          className="ml-1"
        >
          Learn More
        </Button>
      </Col>
    </Row>
  </Col>
)

export default AcademySectionText
