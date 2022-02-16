// import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import "./FullPageVideo.css";
import video from "../../videos/IMG_6662.MP4";
import closeLogo from "../../images/tiktok-close-icon-fpv.PNG";
import tiktokSmallLogo from "../../images/tiktok-SmallLogo-icon.png";

export default function FullPageVideo(props) {
  const { onClose, selectedVideo, open } = props;
  console.log(selectedVideo);

  const handleClose = (event, reason) => {
    if (reason && reason !== "backdropClick") {
      onClose(selectedVideo);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="fullPageVideoWrapper">
        <div className="videoContainFullPageVideo">
          <div className="videoContainerFPV">
            <div className="videoContainFPV">
              <div className="theVideoContainFPV">
                <video
                  className="videoFPV"
                  playsInline
                  //   loop
                  autoPlay
                  controls
                  src={video}
                  alt=""
                ></video>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="closeBtnFPV">
            <img src={closeLogo} alt="closeLogo"></img>
          </button>
          <div className="tiktokSmallLogo">
            <img src={tiktokSmallLogo} alt="tiktokSmallLogo"></img>
          </div>
        </div>

        <div className="commentsContainFullPageVideo"></div>
      </div>
    </Dialog>
  );
}
