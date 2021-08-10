import Container from "react-bootstrap/Container"
import TemplatePageHeader from "./TemplatePageHeader"

const TemplatePage = ({ title, description, children }) => (
  <Container as="main" className="mt-100 px-4 pb-5">
    <TemplatePageHeader title={title} description={description} />
    {children}
  </Container>
)

export default TemplatePage
