import Row from "react-bootstrap/Row"
import VideoListItem from "./VideoListItem"

const VideoList = ({ videos, handleDeleteVideo }) => {
  console.log("VIDEOS:", videos)
  return (
    <Row>
      {videos.map((video) => (
        <VideoListItem
          key={video.id}
          video={video}
          handleDeleteVideo={handleDeleteVideo}
        />
      ))}
    </Row>
  )
}

export default VideoList
