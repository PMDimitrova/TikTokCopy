import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import {useDispatch} from "react-redux";

export default function SignUp(props){
    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }
    const showLoginDialog = () => {
        dispatch({type : 'SHOW_LOGIN'});
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={handleShowLoginWithEmail}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Sign up</div>
                <div className={styles.loginOptionsContainer}>
                    <div className={styles.signUpWrapper}>
                        <div style={{fontWeight: 600}}>When's your birthday?</div>
                        <div className={styles.signUpDateWrapper}>
                            <div className={styles.signUpDropDown}>Month</div>
                            <div className={styles.signUpDropDown}>Day</div>
                            <div className={styles.signUpDropDown}>Year</div>
                        </div>
                        <div className={styles.signUpSmallText}>Your birthday won't be shown publicly.</div>
                        <div className={styles.signUpOpt}>
                            <div style={{fontWeight: 600}}>Email</div>
                            <div>Sign up with phone</div>
                        </div>
                        <input className={styles.singUpInput} placeholder={'Email address'}/>
                        <input className={styles.singUpInput} placeholder={'Password'}/>
                        <div className={styles.singUpCodeWrapper}>
                            <input className={styles.singUpCode} placeholder={'Enter 6-digit code //123456'}/>
                            <div className={styles.signUpSendCode}>Send code</div>
                        </div>
                        <button className={styles.signUpBtn}>Next</button>
                    </div>
                </div>
                <div className={styles.signUpFooter} style={{marginTop: 80}}>By continuing, you agree to TikTok's Terms of Service and confirm that you have read TikTok's Privacy Policy.</div>
            </div>
            <div className={styles.loginFooterContainer}>
                Already have and account? <a className={styles.signUpLink} href={'#'} onClick={showLoginDialog}>Log in</a>
            </div>
        </div>
    )
}