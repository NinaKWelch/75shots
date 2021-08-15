//import uuid from "uuid/v4"
import AddVideoPage from "./AddVideoPage"

//const USER_ID = uuid()

const AddVideo = ({ handleCreateVideo }) => {
  /*const storeFile = async (file) => {
    if (file) {
      await Storage.input(file.name, file)
      return file.name
    }

    return
  }*/

  return (
    <div>
      <AddVideoPage handleCreateVideo={handleCreateVideo} />
    </div>
  )
}

export default AddVideo
