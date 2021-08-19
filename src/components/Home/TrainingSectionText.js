import { Link } from "react-router-dom"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

const TrainingSectionText = () => (
  <Col xs={12} md={6}>
    <Row className="align-items-center">
      <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
        <h3 className="mb-4 fs-2 lh-1 text-uppercase">
          <span className="fw-lighter">75 Shots offers </span>
          <span className="fw-bolder">
            weekly online smartphone film training to selected candidates
          </span>
        </h3>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
        <Button
          as={Link}
          to="/training/apply"
          variant="primary"
          size="lg"
          className="mr-1"
        >
          Apply
        </Button>{" "}
        <Button
          as={Link}
          to="/training/pocket-cinema"
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

export default TrainingSectionText
