const INITIAL_STATE ={
    comments: [],
    commentsCounter: 0,
    description : "",
    likedBy : [],
    likesCounter: 0,
    owner: "",
    sharesCounter: 0,
    song: "",
    video: ""
}

export const videoReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'LIKE_VIDEO':
            return{
                ...state,
                likesCounter: action.payload
            }
        case 'UNLIKE_VIDEO':
            return{
                ...state,
                likesCounter: action.payload
            }
        case 'COMMENT_VIDEO':
            return{
                ...state,
                comments: action.payload
            }
        default: return state;
    }
}
