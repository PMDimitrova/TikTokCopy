import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";

export default function LoginWithEmail(props){
    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }

    const showRegisterDialog = () => {
        dispatch({type : 'SHOW_REGISTER'});
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
                            <input className={styles.loginInputField} placeholder={'Email or Username'}/>
                            <input className={styles.loginInputField} placeholder={'Password'} />
                        </form>
                    <div className={styles.loginForgotPass}>Forgot password?</div>
                    <button className={styles.loginBtn}>Log in</button>
                    </div>
                </div>
            </div>
            <div className={styles.loginFooterContainer}>
                Don't have an account? <a className={styles.signUpLink} href={'#'} onClick={showRegisterDialog}>Sing up</a>
            </div>
        </div>
    )
}