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
        default: return state;
    }
};
