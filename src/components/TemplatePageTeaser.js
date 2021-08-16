import Col from "react-bootstrap/Col"

const TemplatePageTeaser = ({ boldText, plainText }) => (
  <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1 }} className="pt-5">
    <h5 className="fs-2 lh-1 text-secondary text-uppercase">
      <span className="fw-bolder">{boldText} </span>
      <span className="fw-lighter">{plainText}</span>
    </h5>
  </Col>
)

export default TemplatePageTeaser
