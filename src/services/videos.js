import { API, graphqlOperation } from "aws-amplify"
import { listVideos as ListVideos } from "../graphql/queries"
import { createVideo as CreateVideo } from "../graphql/mutations"
import { deleteVideo as DeleteVideo } from "../graphql/mutations"

export const getVideos = async () => {
  try {
    const response = await API.graphql(graphqlOperation(ListVideos))
    return response.data.listVideos.items
  } catch (err) {
    console.log("error fetching videos...", err.message)
    return "error"
  }
}

export const createVideo = async (data) => {
  try {
    const response = await API.graphql(graphqlOperation(CreateVideo, { input: data }))
    console.log("response for new video...", response)
  } catch (err) {
    console.log("error creating video...", err.message)
    return "error"
  }
}

export const deleteVideo = async (id) => {
  try {
    const response = await API.graphql(graphqlOperation(DeleteVideo, { input: { id } }))
    console.log("response for deleted video...", response)
  } catch (err) {
    console.log("error deleting video...", err.message)
    return "error"
  }
}
