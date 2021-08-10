import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const DonatePageSection = ({
  media,
  mediaAlt,
  title,
  subtitle,
  buttonText,
  settleDonation,
  donationType,
  children,
}) => {
  return (
    <Card className="mb-2">
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card.Img src={media} alt={mediaAlt} />
        </Col>
        <Col xs={12} sm={6} md={8}>
          <Card.Body as={Row} className="h-100 align-items-start flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{children}</Card.Text>
            <Col
              xs={{ span: 6, offset: 6 }}
              sm={{ span: 12, offset: 0 }}
              md={{ span: 6, offset: 6 }}
              lg={{ span: 5, offset: 7 }}
              xl={{ span: 4, offset: 8 }}
              className="mt-auto"
            >
              <Button
                variant="warning"
                size="lg"
                className="w-100"
                onClick={() => settleDonation(donationType)}
              >
                {buttonText}
              </Button>
            </Col>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default DonatePageSection
