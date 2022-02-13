import styles from "./Login.module.scss";
import {GrClose} from "react-icons/gr";
import LoginOption from "./LoginOption";
import {RiUserLine} from "react-icons/ri";
import {FaFacebook} from "react-icons/fa";
import {AiOutlineGoogle} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";

export default function Register(){
    return (
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Sign up for TikTok</div>
                <div className={styles.loginOptionsContainer}>
                    <div className={styles.loginWrapper}>
                        <LoginOption icon={<RiUserLine/>} text={'Use phone / email / username'} />
                        <LoginOption icon={<FaFacebook/>} text={'Continue with Facebook'} />
                        <LoginOption icon={<AiOutlineGoogle/>} text={'Continue with Google'} />
                        <LoginOption icon={<BsTwitter/>} text={'Continue with Twitter'} />
                    </div>
                </div>
                <div className={styles.signUpFooter} style={{marginTop: 200}}>By continuing, you agree to TikTok's Terms of Service and confirm that you have read TikTok's Privacy Policy.</div>
            </div>
            <div className={styles.loginFooterContainer}>
                Already have and account? <a className={styles.signUpLink} href={'#'}>Log in</a>
            </div>
        </div>
    )
}