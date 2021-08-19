import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TrainingAside = () => {
  return (
    <Row className="py-5">
      <Col
        xs={{ span: 10, offset: 1 }}
        md={{ span: 6, offset: 3 }}
        className="text-center"
      >
        <h4 className="py-3 fs-2 fw-bolder text-secondary text-uppercase">
          Build practical skills to drive change in your community
        </h4>
      </Col>
    </Row>
  )
}

export default TrainingAside
