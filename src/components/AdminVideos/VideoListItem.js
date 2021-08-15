import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
//import Badge from "react-bootstrap/Badge"
import Button from "react-bootstrap/Button"

const VideoListItem = ({ video, handleDeleteVideo }) => {
  /*const dollarPrice = (num) => {
    const price = num / 100
    return "$" + price.toString()
  }*/

  return (
    <Card as={Col} xs={12} className="mb-2">
      <Row>
        <Col xs={12} md={4}>
          <Card.Img src={video.imgUrl} alt="video image" />
        </Col>
        <Card.Body as={Col} xs={12} md={8}>
          <Row className="align-items-center">
            <Col xs={9}>
              <Card.Title>{video.title}</Card.Title>
              {/*<Card.Text className="text-muted">
                {dollarPrice(video.pricePerView)}
              </Card.Text>
              <Card.Text>
                {video.categories.map((category, index) => (
                  <span key={index}>
                    <Badge bg="secondary" pill>
                      {category}
                    </Badge>{" "}
                  </span>
                ))}
              </Card.Text>*/}
            </Col>
            <Col xs={3}>
              {/*<Button variant="light" size="lg">
                Edit
              </Button>*/}
              <Button
                variant="outline-danger"
                size="lg"
                onClick={() => handleDeleteVideo(video.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Row>
    </Card>
  )
}

export default VideoListItem
