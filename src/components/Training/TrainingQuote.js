import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TrainingQuote = () => {
  return (
    <Row className="pt-5 pb-4 bg-primary">
      <Col xs={{ span: 10, offset: 1 }}>
        <figure className="text-start">
          <blockquote className="blockquote">
            <p className="fs-2 lh-1 fw-bolder text-white">
              "Karin and 75 Shots is the thing that reminds me that I have a dream, that I
              deserve to be happy, that I can make things happen."
            </p>
          </blockquote>
          <figcaption className="text-end fs-4 fw-bold text-white">
            <cite title="Source Title">Khaled, 75 Shots Graduate</cite>
          </figcaption>
        </figure>
      </Col>
    </Row>
  )
}

export default TrainingQuote
