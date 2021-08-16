import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const QuoteSection = () => (
  <Row className="py-5">
    <Col
      xs={{ span: 10, offset: 1 }}
      md={{ span: 8, offset: 2 }}
      className="border border-5 border-top-0 border-bottom-0 border-start-0 border-primary pt-3"
    >
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>
            "Unless we make it our civic duty to stand in solidarity with those who are
            deprived of their own creative freedoms, we will keep on making inauthentic
            stories about our global LGBTQ+ family."
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Founder of 75 Shots <cite title="Source Title">Karin Haze</cite>
        </figcaption>
      </figure>
    </Col>
  </Row>
)

export default QuoteSection
