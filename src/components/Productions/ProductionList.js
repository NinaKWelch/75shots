import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const ProductionList = ({ videos }) => {
  console.log("VIDEOS:", videos)

  if (videos.length === 0) {
    return <div>No videos</div>
  }

  return (
    <Row>
      {videos.map((video) => (
        <Col xs={12} key={video.id}>
          <Card>
            <Card.Body>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text>{video.director}</Card.Text>
              <Card.Text>{video.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default ProductionList
