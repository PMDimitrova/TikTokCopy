import styles from "./Login.module.scss";
import LoginOption from "./LoginOption";
import {MdQrCode} from '../../../node_modules/react-icons/md'
import {RiUserLine} from '../../../node_modules/react-icons/ri'
import {FaFacebook, FaInstagramSquare} from '../../../node_modules/react-icons/fa'
import {AiOutlineGoogle} from '../../../node_modules/react-icons/ai'
import {BsTwitter, BsApple} from '../../../node_modules/react-icons/bs'
import {GrClose} from '../../../node_modules/react-icons/gr'
import {Dialog, DialogContent} from "@mui/material";
import SignUp from "./SignUp";
import * as React from "react";
import {useState} from "react";


export default function Login(props){
    // function displayEmailLogin(ev){
    //     ev.preventDefault();
    //     console.log('email login')
    // }
    const [openSignUp, setOpenSignUp] = useState(false);
    const handleClickSignUpOpen = () => {
        setOpenSignUp(true);
        console.log('sign up func')
    };
    const handleClickSignUpClose = () => {setOpenSignUp(false);};

    return(
        <>
        <div className={styles.loginContainer}>
            <div className={styles.closeBtn} onClick={props.closeBtnFunc}><GrClose/></div>
            <div className={styles.loginContainerContent}>
                <div className={styles.loginTitle}>Log in to TikTok</div>
                <div className={styles.loginOptionsContainer}>
                    <LoginOption icon={<MdQrCode/>} text={'Use QR code'} />
                    <LoginOption icon={<RiUserLine/>} onClick={props.singUp} text={'Use phone / email / username'} />
                    <LoginOption icon={<FaFacebook/>} text={'Continue with Facebook'} />
                    <LoginOption icon={<AiOutlineGoogle/>} text={'Continue with Google'} />
                    <LoginOption icon={<BsTwitter/>} text={'Continue with Twitter'} />
                    <LoginOption icon={<BsApple/>} text={'Continue with Apple'} />
                    <LoginOption icon={<FaInstagramSquare />} text={'Continue with Instagram'} />
                </div>
            </div>
            <div className={styles.loginFooterContainer}>
                Don't have an account? <a className={styles.signUpLink} href={'#'}>Sing up</a>
            </div>
        </div>

    <Dialog
        open={openSignUp}
        onClose={handleClickSignUpClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogContent>
            <SignUp closeBtnFunc={handleClickSignUpClose} />
        </DialogContent>
    </Dialog>
        </>
    )
}