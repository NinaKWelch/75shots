const videoReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return action.videos
    case "CREATE_VIDEO":
      return { ...state, ...action.video }
    case "UPDATE_VIDEO":
      return state.filter((obj) => (obj.id === action.video.id ? action.video : obj))
    case "DELETE_VIDEO":
      return state.filter((obj) => obj.id !== action.video.id)
    default:
      return state
  }
}

export default videoReducer
