const INITIAL_STATE = {
    videos: []
};

export const allVideoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'GET_ALL_VIDEOS':
            console.log(action)
            return{
                ...state, 
                videos : action.payload
            }
        // case 'LIKE_VIDEO':
        //     return{
        //         ...state,
        //         likesCounter: action.payload
        //     }
        // case 'UNLIKE_VIDEO':
        //     return{
        //         ...state,
        //         likesCounter: action.payload
        //     }
        // case 'COMMENT_VIDEO':
        //     return{
        //         ...state,
        //         comments: action.payload
        //     }
        default: return state;
    }
};
