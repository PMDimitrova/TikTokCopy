import './NotLogBtns.css';
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import Login from "../LoginRegister/Login";
import * as React from "react";
import SignUp from "../LoginRegister/SignUp";

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
                        <Login closeBtnFunc={handleClickLoginClose} singUp={handleClickSignUpOpen}/>
                    </DialogContent>
                </Dialog>

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
            </div>
        </>

    )
}