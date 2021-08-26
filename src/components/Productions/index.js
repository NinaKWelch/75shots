import React, { useEffect, useState } from "react"
// import query definition
import { listVideos as ListVideos } from "../../graphql/queries"
// imports form Amplify library
import { API, graphqlOperation } from "aws-amplify"
import Container from "react-bootstrap/Container"
import ProductionList from "./ProductionList"

const Productions = () => {
  const [videos, setVideos] = useState([])

  // scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const videoData = await API.graphql(graphqlOperation(ListVideos))
        console.log("videoData:", videoData)
        setVideos(videoData.data.listVideos.items)
      } catch (err) {
        console.log("error fetching videos...", err.message)
      }
    }
    getData()
  }, [])

  return (
    <Container className="mt-72">
      <ProductionList videos={videos} />
    </Container>
  )
}

export default Productions
