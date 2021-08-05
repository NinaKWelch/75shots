import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"

const VideoListItem = ({ video }) => {
  const dollarPrice = (num) => {
    const price = num / 100
    return "$" + price.toString()
  }

  const checkPrice = () => {
    const buy = video.price_buy
    const rent = video.price_rent

    if (buy > 0 && rent > 0) {
      return dollarPrice(rent) + " RENT / " + dollarPrice(buy) + " BUY"
    }

    if (buy > 0 && rent === 0) {
      return dollarPrice(buy) + " BUY"
    }

    if (buy === 0 && rent > 0) {
      return dollarPrice(rent) + " RENT"
    }

    if (buy === 0 && rent === 0) {
      return "FREE"
    }
  }

  return (
    <Card as={Col} xs={12} className="mb-2">
      <Row>
        <Col xs={12} md={4}>
          <Card.Img src={video.imgUrl} alt="vido image" />
        </Col>
        <Card.Body as={Col} xs={12} md={8}>
          <Row className="align-items-center">
            <Col xs={9}>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text className="text-muted">{checkPrice()}</Card.Text>
              <Card.Text>
                {video.categories.map((category, index) => (
                  <>
                    <Badge key={index} bg="secondary" pill>
                      {category}
                    </Badge>{" "}
                  </>
                ))}
              </Card.Text>
            </Col>
            <Col xs={3}>
              <Button variant="light" size="lg">
                Edit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Row>
    </Card>
  )
}

export default VideoListItem
