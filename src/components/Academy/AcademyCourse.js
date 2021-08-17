import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

const AcademyCourse = () => {
  return (
    <Row className="align-items-center">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 1 }}>
        <Image src="https://via.placeholder.com/600x600.png" fluid alt="75 Shots" />
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 0 }} className="p-5">
        <h5 className="mb-4 fs-6 text-primary fw-light text-uppercase">Courses</h5>
        <h4 className="mb-4 fs-2 fw-lighter text-uppercase">Pocket Cinema</h4>
        <p className="mb-4">
          This training has two components: one is technical and the other theoretical.
          You will learn the basics of filmmaking, how to tell your own story and develop
          your own unique style. This course is tailored for you. Please make sure to
          prepare your questions beforehand.
        </p>
        <Button variant="primary" size="lg">
          Apply Today
        </Button>
      </Col>
    </Row>
  )
}

export default AcademyCourse
