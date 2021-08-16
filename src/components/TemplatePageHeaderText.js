import Col from "react-bootstrap/Col"

const TemplatePageHeaderText = ({ title, subTitleBold, subTitle }) => (
  <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="text-white">
    <h2 className="mb-3 fs-6 lh-1 text-uppercase">{title}</h2>
    <h3 className="mb-3 fs-2 lh-1 text-uppercase">
      <span className="fw-bolder">{subTitleBold} </span>
      <span className="fw-lighter">{subTitle}</span>
    </h3>
  </Col>
)

export default TemplatePageHeaderText
