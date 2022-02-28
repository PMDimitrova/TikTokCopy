import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFollow } from "../../../redux/actions/allUsersAction";
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../../LoginRegister/LoginSignUpMain";
import { useState } from "react";

export default function FollowButton(props) {
  const userLogged = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const isUserLogged = props.isLogged;

  const iFollowUser = () => {
    const usernameToFollow = props.video.owner;
    userLogged.iFollow.push(usernameToFollow);
    dispatch(toggleFollow(userLogged));
  };

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
        className={props.className}
        onClick={isUserLogged ? iFollowUser : handleClickLoginOpen}
      >
        Follow
      </button>
      <Dialog
        open={openLogin}
        onClose={handleClickLoginClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <LoginSignUpMain closingFunction={handleClickLoginClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
