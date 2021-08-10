import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TemplatePageHeader = ({ title, description }) => (
  <Row>
    <Col>
      <h2>{title}</h2>
      <p>{description}</p>
    </Col>
  </Row>
)

export default TemplatePageHeader
