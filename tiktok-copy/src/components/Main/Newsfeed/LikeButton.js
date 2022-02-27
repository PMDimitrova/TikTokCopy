import React from "react";
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../../LoginRegister/LoginSignUpMain";

export default function LikeButton(props) {
    return (
        <>
        <button
            onClick={props.actionOnClick}
            className="buttonActionVideoCard">
        <span className="buttonIconVideoCard">
            <img src={props.pic} alt="buttonIconVideoCard"/>
        </span>
            <strong className="textLikesVideoCard">
                {props.likeByLength}
            </strong>
        </button>
        <Dialog
            open={props.openLoginState}
            onClose={props.actionClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <LoginSignUpMain closingFunction={props.actionClose}/>
            </DialogContent>
        </Dialog>
        </>

    )
}