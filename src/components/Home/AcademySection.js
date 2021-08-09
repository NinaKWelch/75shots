import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import { ArrowRight } from "react-bootstrap-icons"

const AcademySection = () => {
  return (
    <Row className="bg-light align-items-center">
      <Col xs={12} md={6} className="py-5 px-5">
        <h3>75Shots Academy is...</h3>
        <h4>what is it about</h4>
        <Button variant="primary">Apply</Button>
      </Col>
      <Col xs={12} md={6} className="py-5">
        <Row className="align-items-center">
          <Col xs={3} className="mb-2">
            <Image
              src="https://via.placeholder.com/600x600.png"
              fluid
              roundedCircle
              className="bg-secondary"
              alt="75 Shots"
            />
          </Col>
          <Col xs={8} className="mb-2">
            <h5>Join...</h5>
            <Button variant="Link" size="lg">
              <ArrowRight /> Fellowship
            </Button>
          </Col>
          <Col xs={3} className="mb-2">
            <Image
              src="https://via.placeholder.com/600x600.png"
              fluid
              roundedCircle
              className="bg-secondary"
              alt="75 Shots"
            />
          </Col>
          <Col xs={8} className="mb-2">
            <h5>Learn...</h5>
            <Button variant="Link" size="lg">
              <ArrowRight /> Course
            </Button>
          </Col>
          <Col xs={3} className="mb-2">
            <Image
              src="https://via.placeholder.com/600x600.png"
              fluid
              roundedCircle
              className="bg-secondary"
              alt="75 Shots"
            />
          </Col>
          <Col xs={8} className="mb-2">
            <h5>Earn...</h5>
            <Button variant="Link" size="lg">
              <ArrowRight /> Rewards
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AcademySection
