const INITIAL_STATE = {
    showLogin: false,
    showLoginOption: false,
    showSingUp: true,
    showRegister: false
};

export const singLoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SHOW_LOGIN':
            return{
                showLogin: true,
                showLoginOption: false,
                showSingUp: false,
                showRegister: false
            }
        case 'SHOW_LOGIN_OPTIONS':
            return{
                showLogin: false,
                showLoginOption: true,
                showSingUp: false,
                showRegister: false
            }
        case 'SHOW_SIGNUP':
            return {
                showLogin: false,
                showLoginOption: false,
                showSingUp: true,
                showRegister: false
            }
        case 'SHOW_SIGNUP_OPTIONS':
            return {
                showLogin: false,
                showLoginOption: false,
                showSingUp: false,
                showRegister: true
            }
        default: return state;
    }
};
