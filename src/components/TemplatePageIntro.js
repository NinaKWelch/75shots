import Col from "react-bootstrap/Col"

const TemplatePageIntro = ({ title, children }) => (
  <Col
    xs={{ span: 10, offset: 1 }}
    md={{ span: 5, offset: 1 }}
    className="pt-0 pt-md-5 pb-5 text-secondary"
  >
    <h4 className="pb-2 fs-5 text-uppercase">{title}</h4>
    <div className="pt-4 pt-md-1">{children}</div>
  </Col>
)

export default TemplatePageIntro
