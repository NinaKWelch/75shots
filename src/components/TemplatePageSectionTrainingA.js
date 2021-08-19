import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

const TemplatePageSectionTrainingA = ({
  title,
  imgLink,
  imgAlt,
  btnText,
  btnLink,
  children,
}) => {
  return (
    <Row className="align-items-center">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 1 }}>
        <Image src={imgLink} fluid alt={imgAlt} />
      </Col>
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 5, offset: 0 }} className="p-5">
        <h5 className="mb-4 fs-6 text-primary fw-light text-uppercase">Training</h5>
        <h4 className="mb-4 fs-2 fw-lighter text-uppercase">{title}</h4>
        <div className="mb-4">{children}</div>
        <Button as={Link} to={btnLink} variant="primary" size="lg">
          {btnText}
        </Button>
      </Col>
    </Row>
  )
}

export default TemplatePageSectionTrainingA
