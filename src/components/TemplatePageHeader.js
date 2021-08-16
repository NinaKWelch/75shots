import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TemplatePageHeaderText from "./TemplatePageHeaderText"

const TemplatePageHeader = ({ titleImage, title, subTitleBold, subTitle }) => {
  const HeaderStyles = {
    height: 440,
    background: `no-repeat center/cover url(${titleImage})`,
  }

  return (
    <Row style={HeaderStyles} className="align-items-center">
      <Col xs={12} md={{ span: 6, offset: 5 }} className="h-100 bg-header-overlay">
        <Row className="h-100 align-items-center bg-header-overlay-content">
          <TemplatePageHeaderText
            title={title}
            subTitleBold={subTitleBold}
            subTitle={subTitle}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default TemplatePageHeader
