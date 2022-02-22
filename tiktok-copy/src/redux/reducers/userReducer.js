const INITIAL_STATE = {
    logged: false,
    username: null,
    profilePicture: '',
    bio: '',
    iFollow: '',
    myVideos: '',
    nickname: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                logged: true,
                username: action.payload.username,
                profilePicture: action.payload.profilePicture,
                bio: action.payload.bio,
                iFollow: action.payload.iFollow,
                myVideos: action.payload.myVideos,
                nickname: action.payload.nickname,
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
