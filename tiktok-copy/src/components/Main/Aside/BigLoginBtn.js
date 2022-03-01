import './BigLoginBtn.css';
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../../LoginRegister/LoginSignUpMain";
import * as React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";

export default function BigLoginBtn() {
    const dispatch = useDispatch();

    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginOpen = () => {setOpenLogin(true);};
    const handleClickLoginClose = () => {
        setOpenLogin(false);
        dispatch({type : 'SHOW_LOGIN'});
    };
    return (
        <>
            <div className="BigLoginBtnAsideContiner">
                <p className='BigLoginTextAside'>Log in to follow creators, like videos, and view comments.</p>
                <button className='BigLoginBtnAsidePink' onClick={handleClickLoginOpen}>Log in</button>
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
        </>


    )
}