import Col from "react-bootstrap/Col"
import VideoListItem from "./VideoListItem"

const VideoList = ({ videos }) => {
  console.log("VIDEOS:", videos)
  return (
    <Col xs={12}>
      {videos.map((video) => (
        <VideoListItem key={video.id} video={video} />
      ))}
    </Col>
  )
}

export default VideoList
