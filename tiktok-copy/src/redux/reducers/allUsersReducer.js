const INITIAL_STATE = {
    users: [],
};

export const allUsersReducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload)
    switch (action.type){
        case 'GET_ALL_USERS':
            return{
                ...state, 
                users : action.payload
            }
        default: return state;
    }
};