const INITIAL_STATE = {
  videos: [],
};

export const allVideoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "TOGGLE_VIDEO_LIKE":
      const newVideosPost = state.videos.map((el) => {
        if (el.id === action.payload.id) {
          el.likedBy = action.payload.likedBy;
        }
        return el;
      });
      return {
        ...state,
        videos: [...newVideosPost],
      };
      case "ADD_COMMENT":
        const newComments = state.videos.map((el) => {
          if (el.id === action.payload.id) {
            el.comments = action.payload.comments;
          }
          return el;
        });
        return {
          ...state,
          comments: [...newComments],
      };
    default:
      return state;
  }
};
