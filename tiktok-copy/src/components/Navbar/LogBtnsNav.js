import "./LogBtnsNav.css";
import videoBtn from "../../images/tiktok-video-icon.PNG";
import messageBtn from "../../images/tiktok-message-icon.PNG";
import inboxBtn from "../../images/tiktok-inbox-icon.PNG";
import profileBtn from "../../images/tiktok-profile-icon.PNG";
import { Link } from "react-router-dom";
import { MenuItem, Menu } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


export default function LogBtnsNav() {
    //todo change src of profile picture


//FOR HANDLING THE DROP DOWN MENU ON MY PROFILE
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// FOR POSITIONING THE TOOLTIP from MUI
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(16),
    left:'10px',
  },
}));

  return (
    <div className="bntsLog">
      <HtmlTooltip title='Upload video' arrow>
        <div className="uploadVideo">
          <Link to="/videoUpload">
            <img className="logBtnsEach" src={videoBtn} alt="videoBtn" />
          </Link>
        </div>
      </HtmlTooltip>
      <HtmlTooltip title='Message' arrow>
        <div className="textMessages">
          <img className="logBtnsEach" src={messageBtn} alt="messageBtn" />
        </div>
      </HtmlTooltip>
      <HtmlTooltip title='Inbox' arrow>
        <div className="inbox">
          <img className="logBtnsEach" src={inboxBtn} alt="inboxBtn" />
        </div>
      </HtmlTooltip>
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
        <Link className="linkToMyProfileMenu" to='/myProfile'>
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
