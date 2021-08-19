import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

const TrainingGraduatesQuote = () => {
  return (
    <Col xs={12} className="py-5">
      <Row className="align-items-center">
        <Col xs={{ span: 4, offset: 4 }} md={{ span: 2, offset: 1 }}>
          <Image
            src="https://via.placeholder.com/600x600.png"
            fluid
            roundedCircle
            alt="75 Shots"
          />
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 0 }}>
          <figure className="text-start">
            <blockquote className="blockquote">
              <p className="fs-1 text-secondary fst-italic fw-lighter">
                “I've never had such an immersive experience. 75 Shots has the power to
                change your life.”
              </p>
            </blockquote>
            <figcaption className="pt-2 blockquote-footer fs-6 text-uppercase">
              <cite title="Source Title">Artist Name</cite>, Pocket Cinema Graduate 2021
            </figcaption>
          </figure>
        </Col>
      </Row>
    </Col>
  )
}

export default TrainingGraduatesQuote
