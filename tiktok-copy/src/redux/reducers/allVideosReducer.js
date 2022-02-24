const INITIAL_STATE = {
  videos: [],
};

export const allVideoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_VIDEOS":
      // console.log(action);
      return {
        ...state,
        videos: action.payload,
      };
    case "TOGGLE_VIDEO_LIKE":
      const newVideosPost = state.videos.map((el) => {
        if (el.id === action.payload.id) {
          el.likedBy = action.payload.likedBy;
          // console.log(el);
        }
        return el;
      });
      return {
        ...state,
        videos: [...newVideosPost],
      };
    default:
      return state;
  }
};
