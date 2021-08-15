import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"
import { ArrowRight } from "react-bootstrap-icons"

const AcademySectionCourse = () => {
  return (
    <Col xs={12} md={6} className="py-5">
      <Row className="align-items-center">
        <Col xs={{ span: 3, offset: 2 }} md={{ span: 3, offset: 0 }} className="mb-2">
          <Image
            src="https://via.placeholder.com/600x600.png"
            fluid
            roundedCircle
            className="bg-secondary"
            alt="75 Shots"
          />
        </Col>
        <Col xs={6} md={7} className="mb-2">
          <h5>Join...</h5>
          <Button variant="Link" size="lg">
            <ArrowRight /> Fellowship
          </Button>
        </Col>
        <Col xs={{ span: 3, offset: 2 }} md={{ span: 3, offset: 0 }} className="mb-2">
          <Image
            src="https://via.placeholder.com/600x600.png"
            fluid
            roundedCircle
            className="bg-secondary"
            alt="75 Shots"
          />
        </Col>
        <Col xs={6} md={7} className="mb-2">
          <h5>Learn...</h5>
          <Button variant="Link" size="lg">
            <ArrowRight /> Course
          </Button>
        </Col>
        <Col xs={{ span: 3, offset: 2 }} md={{ span: 3, offset: 0 }} className="mb-2">
          <Image
            src="https://via.placeholder.com/600x600.png"
            fluid
            roundedCircle
            className="bg-secondary"
            alt="75 Shots"
          />
        </Col>
        <Col xs={6} md={7} className="mb-2">
          <h5>Earn...</h5>
          <Button variant="Link" size="lg">
            <ArrowRight /> Rewards
          </Button>
        </Col>
      </Row>
    </Col>
  )
}

export default AcademySectionCourse
