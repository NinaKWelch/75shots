import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import AcademyGraduatesQuote from "./AcademyGraduatesQuote"

const AcademyGraduates = () => {
  return (
    <Row className="bg-light">
      <Col xs={{ span: 10, offset: 1 }} className="py-5">
        <h3 className="fs-2 lh-1 text-secondary text-uppercase">
          <span className="fw-bolder">
            Pocket Cinema gradutes embrace the difficult journey
          </span>
          <span className="fw-lighter"> of social change</span>
        </h3>
      </Col>
      <Col xs={{ span: 10, offset: 1 }} className="mb-5">
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Card>
              <Row>
                <Col xs={5}>
                  <Card.Img
                    src="https://via.placeholder.com/600x600.png"
                    alt="graduate"
                  />
                </Col>
                <Col xs={7}>
                  <Card.Body className="pt-4">
                    <Card.Subtitle className="mb-2 fw-light text-primary text-uppercase">
                      Country
                    </Card.Subtitle>
                    <Card.Title className="fw-bold text-secondary text-uppercase">
                      Artist Name
                    </Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card>
              <Row>
                <Col xs={5}>
                  <Card.Img
                    src="https://via.placeholder.com/600x600.png"
                    alt="graduate"
                  />
                </Col>
                <Col xs={7}>
                  <Card.Body className="pt-4">
                    <Card.Subtitle className="mb-2 fw-light text-primary text-uppercase">
                      Country
                    </Card.Subtitle>
                    <Card.Title className="fw-bold text-secondary text-uppercase">
                      Artist Name
                    </Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card>
              <Row>
                <Col xs={5}>
                  <Card.Img
                    src="https://via.placeholder.com/600x600.png"
                    alt="graduate"
                  />
                </Col>
                <Col xs={7}>
                  <Card.Body className="pt-4">
                    <Card.Subtitle className="mb-2 fw-light text-primary text-uppercase">
                      Country
                    </Card.Subtitle>
                    <Card.Title className="fw-bold text-secondary text-uppercase">
                      Artist Name
                    </Card.Title>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>
      <AcademyGraduatesQuote />
    </Row>
  )
}

export default AcademyGraduates
