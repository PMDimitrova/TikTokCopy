import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import LoginOption from "./LoginOption";
import {RiUserLine} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineGoogle} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import {useDispatch} from "react-redux";

export default function Register(props){
    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => {
        props.closingFunc();
        dispatch({type : 'SHOW_LOGIN'});
    }
    const showLoginDialog = () => {
        dispatch({type : 'SHOW_LOGIN'});
    }
    const showSingUpDialog = () => {
      dispatch({type : 'SHOW_SIGNUP'});
    }


    return (
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={handleShowLoginWithEmail}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Sign up for TikTok</div>
                <div className={styles.loginOptionsContainer}>
                    <div className={styles.loginWrapper}>
                        <LoginOption icon={<RiUserLine/>} redirecting={showSingUpDialog} text={'Use phone / email / username'} />
                        <LoginOption icon={<FaFacebook/>} text={'Continue with Facebook'} />
                        <LoginOption icon={<AiOutlineGoogle/>} text={'Continue with Google'} />
                        <LoginOption icon={<BsTwitter/>} text={'Continue with Twitter'} />
                    </div>
                </div>
                <div className={styles.signUpFooter} style={{marginTop: 200}}>By continuing, you agree to TikTok's Terms of Service and confirm that you have read TikTok's Privacy Policy.</div>
            </div>
            <div className={styles.loginFooterContainer}>
                Already have and account? <a className={styles.signUpLink} href={'#'} onClick={showLoginDialog}>Log in</a>
            </div>
        </div>
    )
}