import './NotLogBtns.css';
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import * as React from "react";
import LoginSignUpMain from "../LoginRegister/LoginSignUpMain";
import {useDispatch} from "react-redux";

export default function NotLogBntsNav() {
    const dispatch = useDispatch();
    const handleShowLoginWithEmail = () => {
        dispatch({type : 'SHOW_LOGIN_OPTIONS'});
    }

    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginOpen = () => {setOpenLogin(true);};
    const handleClickLoginClose = () => {
        setOpenLogin(false);
        // dispatch({type : 'SHOW_LOGIN_OPTIONS'});
        dispatch({type : 'SHOW_LOGIN'});
    };

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
                        <LoginSignUpMain closingFunction={handleClickLoginClose}/>
                    </DialogContent>
                </Dialog>
            </div>
        </>

    )
}