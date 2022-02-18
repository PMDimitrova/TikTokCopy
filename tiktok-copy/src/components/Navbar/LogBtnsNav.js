import "./LogBtnsNav.css";
import videoBtn from "../../images/tiktok-video-icon.PNG";
import messageBtn from "../../images/tiktok-message-icon.PNG";
import inboxBtn from "../../images/tiktok-inbox-icon.PNG";
import profileBtn from "../../images/tiktok-profile-icon.PNG";
import { Link } from "react-router-dom";

export default function LogBtnsNav() {
    //todo change src of profile picture

  return (
    <div className="bntsLog">
      <div className="uploadVideo">
        <Link to="/videoUpload">
          <img className="logBtnsEach" src={videoBtn} alt="videoBtn" />
        </Link>
      </div>
      <div className="textMessages">
        <img className="logBtnsEach" src={messageBtn} alt="messageBtn" />
      </div>
      <div className="inbox">
        <img className="logBtnsEach" src={inboxBtn} alt="inboxBtn" />
      </div>
      <div className="myProfile">
        <img className="logBtnsEach" src={profileBtn} alt="profileBtn" />
      </div>
    </div>
  );
}
