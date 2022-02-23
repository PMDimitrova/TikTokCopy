import {Link} from "react-router-dom";
import {RiHome4Line} from "react-icons/ri";
import {BsPeople} from "react-icons/bs";
import {VscDeviceCameraVideo} from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import LoginSignUpMain from "../../LoginRegister/LoginSignUpMain";
import * as React from "react";

export default function MainNavAside() {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.userData.logged);

    const [openLogin, setOpenLogin] = useState(false);
    const handleClickLoginOpen = () => {
        setOpenLogin(true);
    };
    const handleClickLoginClose = () => {
        setOpenLogin(false);
        dispatch({type: 'SHOW_LOGIN_OPTIONS'});
    };

    return (
        <>
            <div className='MainNavAside'>
                <div className='MainAsideBtn'>
                    <Link to='/' className='MainBtn'>
                        <RiHome4Line className={'MainAsideTopIcons'}/>
                        <h2 className='MainBtnText'>For You</h2>
                    </Link>
                </div>
                <div className='MainAsideBtn'>
                    {!isLogged ? (<div className='MainBtn' onClick={handleClickLoginOpen}>
                            <BsPeople className={'MainAsideTopIcons'}/>
                            <h2 className='MainBtnText'>Following</h2>
                        </div>)
                        : (<Link to='/' className='MainBtn'>
                            <BsPeople className={'MainAsideTopIcons'}/>
                            <h2 className='MainBtnText'>Following</h2>
                        </Link>)}
                </div>
                <div className='MainAsideBtn'>
                    <Link to='/underconstruction' className='MainBtn'>
                        <VscDeviceCameraVideo className={'MainAsideTopIcons'}/>
                        <h2 className='MainBtnText'>LIVE</h2>
                    </Link>
                </div>
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