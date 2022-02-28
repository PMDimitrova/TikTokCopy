import React from "react";
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../../LoginRegister/LoginSignUpMain";
import { useSelector, useDispatch } from "react-redux";
import {toggleVideoLike} from '../../../redux/actions/allVideosAction';
import heartIcon from '../../../images/tiktok-heart-icon.PNG';
import { useState } from "react";

export default function LikeButton(props) {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userData);
    const isUserLogged = props.isLogged;

    const likeVideoCard = () =>{
        const username = userLogged.username;
        props.video.likedBy.push(username)
        dispatch(toggleVideoLike(props.video))
      }

//Functions for opening the Log in dialog, when user's not allowed to perform action if not logged in
    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginClose = () => {
        setOpenLogin(false);
        dispatch({ type: "SHOW_LOGIN" });
    };
    const handleClickLoginOpen = () => {
        setOpenLogin(true);
      };
      
    return (
        <>
        <button
            onClick={ isUserLogged? likeVideoCard : handleClickLoginOpen}
            className="buttonActionVideoCard">
        <span className="buttonIconVideoCard">
            <img src={heartIcon} alt="buttonIconVideoCard"/>
        </span>
            {props.video && 
            <strong className="textLikesVideoCard">
                {props.video.likedBy.length}
            </strong>}
        </button>
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