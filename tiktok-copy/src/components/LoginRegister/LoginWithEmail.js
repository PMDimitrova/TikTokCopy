import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Alert} from "@mui/material";

export default function LoginWithEmail(props){
    const [logInBtnState, enableBtn] = useState(true);
    const [wrongCredentials, showWarningCredentials] = useState(false);
    const [loginBtnStyle, changeLoginBtnStyle] = useState(styles.loginBtnDisabled);
    const [userData, changeUserData] = useState({
        username: '',
        password: ''
    })

    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => { //show first window of login dialog, when closed with x-btn
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }

    const showRegisterDialog = () => {
        dispatch({type : 'SHOW_REGISTER'});
    }

    const checkIfBothAreFilled = (event) => { //check if pass & username fields are filled in
        if (event.target.id === 'usernameInputField'){ //save user input in current state
            changeUserData({...userData, username: event.target.value.trim()});
        }else if(event.target.id === 'passwordInputField'){ //save user input in current state
            changeUserData({...userData, password: event.target.value.trim()});
        }
        if(userData.username && userData.password){ //if both are filled - enable login button
            if (logInBtnState){
                enableBtn(!logInBtnState);
            }
            changeLoginBtnStyle(styles.logInBtnEnabled);
        }
    }

    const logUser = () => { //actual login function
        let username = userData.username;
        let password = userData.password;

        fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(users => {
                let incorrectPassword = false;
                let userExists = false;

                for (const [us, details] of Object.entries(users)) {
                    if (us === username){ // if username matches with already existing user
                        if(details.password === password){ //and pass matches - login
                            fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users/${us}.json`)
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);

                                    dispatch({type : 'LOGIN', payload: {
                                            username: data.username,
                                            profilePicture: data.picture,
                                            bio: data.bio,
                                            iFollow: data.iFollow,
                                            myVideos: data.myVideos,
                                            nickname: data.nickname,
                                        }});
                                });
                        }else {
                            incorrectPassword = true;
                        }
                        userExists = true;
                    }
                }
                if (incorrectPassword || !userExists){ //show warning if user credentials are incorrect
                    showWarningCredentials(!wrongCredentials);
                }
            });
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={handleShowLoginWithEmail}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Log in</div>
                <div className={styles.loginOptionsContainer}>
                    <div className={styles.loginWrapper}>
                        <div className={styles.loginFirstOptions}>
                            <div style={{fontWeight: 600}}>Email or Username</div>
                            <div>Log in with phone</div>
                        </div>
                        <form>
                            <input id={'usernameInputField'} className={styles.loginInputField}
                                   placeholder={'Email or Username'} onChange={ event => checkIfBothAreFilled(event)}/>
                            <input id={'passwordInputField'} className={styles.loginInputField}
                                   placeholder={'Password'} type={'password'} onChange={ event => checkIfBothAreFilled(event)}/>
                        </form>
                    <div className={styles.loginForgotPass}>Forgot password?</div>
                    <button id={'logInButton'} className={loginBtnStyle}
                            disabled={logInBtnState} onClick={logUser}>Log in</button>
                    </div>
                    {wrongCredentials ? <Alert variant="outlined" severity="error"
                                               style={{marginTop:12}}>Wrong credentials</Alert> : <></>}
                </div>
            </div>
            <div className={styles.loginFooterContainer}>
                Don't have an account? <a className={styles.signUpLink} href={'#'} onClick={showRegisterDialog}>Sing up</a>
            </div>
        </div>
    )
}