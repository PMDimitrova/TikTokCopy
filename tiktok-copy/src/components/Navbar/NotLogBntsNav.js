import './NotLogBtns.css';
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import * as React from "react";
import LoginSignUpMain from "../LoginRegister/LoginSignUpMain";

export default function NotLogBntsNav() {
    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginOpen = () => {setOpenLogin(true);};
    const handleClickLoginClose = () => {setOpenLogin(false);};

    const [openSignUp, setOpenSignUp] = useState(false);
    const handleClickSignUpOpen = () => {
        setOpenSignUp(true);
        console.log('sign up func')
    };
    const handleClickSignUpClose = () => {setOpenSignUp(false);};

    return (
        <>
            <div>
                <div className='bunsNoLog'>
                    <div className='uploadBtn' onClick={handleClickLoginOpen}>Upload</div>
                    <button className='logInBtn' onClick={handleClickLoginOpen}>Log in</button>
                    <i className='dotsNav'>...</i>
                </div>
                <Dialog
                    open={openLogin}
                    onClose={handleClickLoginClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <LoginSignUpMain/>
                    </DialogContent>
                </Dialog>
            </div>
        </>

    )
}