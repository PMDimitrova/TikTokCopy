const INITIAL_STATE = {
    users: []
};

export const allUsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'GET_ALL_USERS':
            console.log(action)
            return{
                ...state, 
                users : action.payload

            }
        default: return state;
    }
};