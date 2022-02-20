import styles from "./Login.module.scss";
import LoginOption from "./LoginOption";
import {MdQrCode} from '../../../node_modules/react-icons/md'
import {RiUserLine} from '../../../node_modules/react-icons/ri'
import {FaFacebook, FaInstagramSquare} from '../../../node_modules/react-icons/fa'
import {AiOutlineGoogle} from '../../../node_modules/react-icons/ai'
import {BsTwitter, BsApple} from '../../../node_modules/react-icons/bs'
import {GrClose} from '../../../node_modules/react-icons/gr'
import * as React from "react";
import {useDispatch} from "react-redux";


export default function Login(props){
    const dispatch = useDispatch();

    const handleShowLoginWithEmail = () => {
        dispatch({type : 'SHOW_LOGIN_OPTIONS'});
    }

    const showRegisterDialog = () => {
        dispatch({type : 'SHOW_REGISTER'});
    }

    return(
        <>
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={props.closingFunc}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Log in to TikTok</div>
                <div className={styles.loginOptionsContainer}>
                    <LoginOption icon={<MdQrCode/>} text={'Use QR code'} />
                    <LoginOption icon={<RiUserLine/>} redirecting={handleShowLoginWithEmail} text={'Use phone / email / username'} />
                    <LoginOption icon={<FaFacebook/>} text={'Continue with Facebook'} />
                    <LoginOption icon={<AiOutlineGoogle/>} text={'Continue with Google'} />
                    <LoginOption icon={<BsTwitter/>} text={'Continue with Twitter'} />
                    <LoginOption icon={<BsApple/>} text={'Continue with Apple'} />
                    <LoginOption icon={<FaInstagramSquare />} text={'Continue with Instagram'} />
                </div>
            </div>
            <div className={styles.loginFooterContainer}>
                Don't have an account? <a className={styles.signUpLink} href={'#'} onClick={showRegisterDialog}>Sing up</a>
            </div>
        </div>
        </>
    )
}