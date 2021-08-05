import Row from "react-bootstrap/Row"
import VideoListItem from "./VideoListItem"

const VideoList = ({ videos }) => {
  console.log("VIDEOS:", videos)
  return (
    <Row>
      {videos.map((video) => (
        <VideoListItem key={video.id} video={video} />
      ))}
    </Row>
  )
}

export default VideoList
