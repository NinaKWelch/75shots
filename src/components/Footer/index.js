import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { ArrowRight, Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
// import FormNewsletterSignUp from "../FormNewsletterSignUp"
import Logo from "../Logo"

const Footer = () => {
  return (
    <Container as="footer" fluid="xl" className="align-self-end bg-footer">
      <Row className="py-5">
        {/*<Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 5 }}
          className="mb-3"
        >
          <h4 className="text-white">Get our newsletter to stay up to date</h4>
          <FormNewsletterSignUp />
        </Col>*/}
        <Col xs={12}>
          <Row className="align-items-center">
            <Col
              xs={{ span: 6, offset: 3 }}
              sm={{ span: 4, offset: 4 }}
              md={{ span: 2, offset: 1 }}
              className="text-center"
            >
              <Logo />
            </Col>
            <Col xs={12} md={4} className="text-center py-4">
              {/*<Button variant="Link" size="lg" className="text-white">
                <ArrowRight /> Work with us
              </Button>*/}
              <Button variant="Link" size="lg" className="text-white">
                <ArrowRight /> Contact us
              </Button>
            </Col>
            <Col xs={12} md={5} className="text-center py-4">
              <Button variant="Link">
                <Facebook color="white" size={36} />
              </Button>
              <Button variant="Link">
                <Instagram color="white" size={36} />
              </Button>
              <Button variant="Link">
                <Linkedin color="white" size={36} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
