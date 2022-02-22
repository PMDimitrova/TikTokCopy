const INITIAL_STATE = {
    logged: false,
    username: null,
    profilePicture: '',
    bio: '',
    iFollow: '',
    myVideos: '',
    nickname: null,
    picture: ''
};

export const userReducer = (state = INITIAL_STATE, action) => {
    if (action.payload){
        console.log('line here ' + action.payload)

    }

    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                logged: true,
                username: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                logged: false,
                username: null,
                profilePicture: '',
                bio: '',
                iFollow: '',
                myVideos: '',
                nickname: null,
                picture: ''
            }
        case 'LOGIN_AFTER_REGISTER':
            console.log(action.payload);
            return {
                ...state,
                profilePicture: action.payload.picture,
                logged: true,
                username: action.payload.username,
                nickname: action.payload.nickname

            }
        default: return state;
    }
};
