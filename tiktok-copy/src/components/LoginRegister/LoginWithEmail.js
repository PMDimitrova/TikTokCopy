import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Alert} from "@mui/material";

export default function LoginWithEmail(props){
    const [logInBtnState, enableBtn] = useState(true);
    const [wrongCredentials, showWarningCredentials] = useState(false);

    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }

    const showRegisterDialog = () => {
        dispatch({type : 'SHOW_REGISTER'});
    }

    const checkIfBothAreFilled = () => {
        if(document.getElementById('usernameInputField').value.length && document.getElementById('passwordInputField').value.length){
            if (logInBtnState){
                enableBtn(!logInBtnState);
            }
            document.getElementById('logInButton').className = styles.logInBtnEnabled;
        }
    }

    const logUser = () => {
        console.log('clicked log user btn');
        let username = document.getElementById('usernameInputField').value.trim();
        let password = document.getElementById('passwordInputField').value.trim();

        fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(users => {
                let incorrectPassword = false;
                let userExists = false;

                for (const [us, details] of Object.entries(users)) {
                    if (us === username){
                        if(details.password === password){
                            dispatch({type : 'LOGIN', payload: username});
                        }else {
                            incorrectPassword = true;
                        }
                        userExists = true;
                    }
                }
                if (incorrectPassword || !userExists){
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
                                   placeholder={'Email or Username'} onChange={checkIfBothAreFilled}/>
                            <input id={'passwordInputField'} className={styles.loginInputField}
                                   placeholder={'Password'} type={'password'} onChange={checkIfBothAreFilled}/>
                        </form>
                    <div className={styles.loginForgotPass}>Forgot password?</div>
                    <button id={'logInButton'} className={styles.loginBtnDisabled} disabled={logInBtnState} onClick={logUser}>Log in</button>
                    </div>
                    {wrongCredentials ? <Alert variant="outlined" severity="error" style={{marginTop:12}}>Wrong credentials</Alert> : <></>}
                </div>
            </div>
            <div className={styles.loginFooterContainer}>
                Don't have an account? <a className={styles.signUpLink} href={'#'} onClick={showRegisterDialog}>Sing up</a>
            </div>
        </div>
    )
}