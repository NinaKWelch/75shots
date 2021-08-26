//import uuid from "uuid/v4"
import { Storage } from "aws-amplify"
import AddVideoPage from "./AddVideoPage"

//const USER_ID = uuid()

const AddVideo = ({ handleCreateVideo }) => {
  // upload image or video file to S3
  // with public access level
  const storePublicFile = async (file) => {
    if (file) {
      await Storage.input(file.name, file, {
        level: "public",
        contentType: file.type,
      })
    }
  }

  // retreive image or video file from S3
  const displayPublicFile = async (name) => {
    const file = await Storage.get(name, { level: "public" })
    return file
  }

  return (
    <div>
      <AddVideoPage handleCreateVideo={handleCreateVideo} />
    </div>
  )
}

export default AddVideo
