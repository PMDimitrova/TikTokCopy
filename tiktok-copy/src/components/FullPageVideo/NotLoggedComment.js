import { useState } from "react";
import { useDispatch } from "react-redux";
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../LoginRegister/LoginSignUpMain";

export default function NotLoggedComment() {
    const dispatch = useDispatch();
    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginClose = () => {
        setOpenLogin(false);
        dispatch({ type: "SHOW_LOGIN_OPTIONS" });
    };
    const handleClickLoginOpen = () => {
        setOpenLogin(true);
      };
  return (
    <>
      <div className="CommentGoToLogWrapper">
        <h4 className="LoginTitleonComments">Log in to see comments</h4>
        <p className="logInLittleTitle">
          Log in to see comments and like the video
        </p>
        <button
          className="logInBtnonCommentsLog"
          onClick={handleClickLoginOpen}
        >
          Log in
        </button>
      </div>
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
