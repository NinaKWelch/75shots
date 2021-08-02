import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import VideoList from "./VideoList"

const VideoPage = () => {
  const videos = [
    {
      id: 1,
      title: "Video 1",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 0,
      price_rent: 0,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["free", "education"],
    },
    {
      id: 2,
      title: "Video 2",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 9900,
      price_rent: 399,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["lgbtq", "fundraiser"],
    },
    {
      id: 3,
      title: "Video 3",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 9900,
      price_rent: 399,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["lgbtq"],
    },
    {
      id: 4,
      title: "Video 4",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 0,
      price_rent: 399,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["education"],
    },
    {
      id: 5,
      title: "Video 5",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 0,
      price_rent: 0,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["free"],
    },
    {
      id: 6,
      title: "Video 6",
      author: "Author",
      description: "More about the video",
      length: "12:00",
      price_buy: 0,
      price_rent: 399,
      imgUrl: "https://via.placeholder.com/1600x900.png",
      categories: ["lgbtq", "fundraiser"],
    },
  ]

  return (
    <Row>
      <VideoList videos={videos} />
    </Row>
  )
}

export default VideoPage