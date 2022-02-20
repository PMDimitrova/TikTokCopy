import "./LogBtnsNav.css";
import videoBtn from "../../images/tiktok-video-icon.PNG";
import messageBtn from "../../images/tiktok-message-icon.PNG";
import inboxBtn from "../../images/tiktok-inbox-icon.PNG";
import profileBtn from "../../images/tiktok-profile-icon.PNG";
import { Link } from "react-router-dom";
import { MenuItem, Tooltip, Menu } from '@mui/material';
import * as React from 'react';


export default function LogBtnsNav() {
    //todo change src of profile picture

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bntsLog">
      <Tooltip title='Upload video' arrow>
        <div className="uploadVideo">
          <Link to="/videoUpload">
            <img className="logBtnsEach" src={videoBtn} alt="videoBtn" />
          </Link>
        </div>
      </Tooltip>
      <Tooltip title='Message' arrow>
        <div className="textMessages">
          <img className="logBtnsEach" src={messageBtn} alt="messageBtn" />
        </div>
      </Tooltip>
      <Tooltip title='Inbox' arrow>
        <div className="inbox">
          <img className="logBtnsEach" src={inboxBtn} alt="inboxBtn" />
        </div>
      </Tooltip>
      <div id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      className="myProfile">
        <img className="logBtnsEach" src={profileBtn} alt="profileBtn" />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/myProfile'>
          <MenuItem onClick={handleClose}>View profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Feedback and help</MenuItem>
        <MenuItem onClick={handleClose}>Keyboard and shortcuts</MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>

      
    </div>
  );
}
