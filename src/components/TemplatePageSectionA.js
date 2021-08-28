import { Link } from "react-router-dom"
import { ArrowRight } from "react-bootstrap-icons"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

const TemplatePageSectionA = ({ title, imgLink, imgAlt, btnText, btnLink, children }) => {
  return (
    <Row className="bg-light py-5 align-items-center">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1 }} className="py-5">
        <h4 className="mb-4 fs-2 fw-lighter text-uppercase">{title}</h4>
        <div className="mb-4">{children}</div>
        <Button as={Link} to={btnLink} variant="link" size="lg" className="p-0">
          <ArrowRight />
          {btnText}
        </Button>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 1 }}>
        <Image src={imgLink} fluid alt={imgAlt} />
      </Col>
    </Row>
  )
}

export default TemplatePageSectionA
