import Container from "react-bootstrap/Container"
import TemplatePageHeader from "./TemplatePageHeader"

const TemplatePage = ({ titleImage, title, subTitleBold, subTitle, children }) => (
  <Container as="main" className="mt-72 pb-5">
    <TemplatePageHeader
      titleImage={titleImage}
      title={title}
      subTitleBold={subTitleBold}
      subTitle={subTitle}
    />
    {children}
  </Container>
)

export default TemplatePage
