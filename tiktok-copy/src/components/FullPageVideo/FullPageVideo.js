import Dialog from "@mui/material/Dialog";
import "./FullPageVideo.css";
import video from "../../videos/IMG_6662.MP4";
import closeLogo from "../../images/tiktok-close-icon-fpv.PNG";
import tiktokSmallLogo from "../../images/tiktok-SmallLogo-icon.png";
import heartIcon from '../../images/tiktok-heart-icon.PNG'
import commentIcon from '../../images/tiktok-comment-icon.PNG';
import embedIcon from '../../images/tiktok-share-1.PNG'
import shareIcon from '../../images/tiktok-share-2.PNG'
import twitIcon from '../../images/tiktok-share-3.PNG'
import faceIcon from '../../images/tiktok-share-4.PNG'
import whatsIcon from '../../images/tiktok-share-5.PNG';
import CommentFPV from "./CommentFPV";

export default function FullPageVideo(props) {
    const profilePeople = 
        {
          profilePicture:
            "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
          username: "vladi24t6",
          nickname: "Vladito",
          myUploadedVideos: 
            {
              description: "sport game play",
              song: "Original sound - Metalika",
              video: video,
              likes: 456,
              comments: 346,
              shares: 5,
            }
        };



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
{/* FIRST HALF CONTAINER FOR THE VIDEO */}
        <div className="videoContainFullPageVideo">
          <div className="videoContainerFPV">
            <div className="videoContainFPV">
              <div className="theVideoContainFPV">
                {selectedVideo && <video
                  className="videoFPV"
                  playsInline
                  loop
                  autoPlay
                  controls
                  src={selectedVideo.video}
                  alt="video full page"
                ></video>}
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

{/* SECOND HALF CONTAINER FOR THE COMMENTS AND DESCRIPTION */}
        <div className="commentsContainFullPageVideo">
            {/* PROFILE PIC, NAMES AND FOLLOW BTN CONTAINER */}
            <div className="infoContainerFPV">
                <div className="profilePictureContainFPV">
                    <div className="profilePicContainFPV">
                      {selectedVideo && <img className="avatarPicFPV" src={selectedVideo.profilePicture} alt="profile picture"></img>}
                    </div>
                </div>
                <div className="usernameNickameContainerFPV">
                    {selectedVideo &&
                    <div className="usernameContainerFPV">{selectedVideo.owner}</div>}
                    <div className="nicknameContainerFPV"> {profilePeople.nickname}</div>
                </div>
                <button className="followBtnFPV">
                    Follow
                </button>
            </div>
            {/* DESCRIPTION CONTAINER FPV */}
            <div className="descriptionContainerFPV">
                {selectedVideo && 
                <div className="videodescriptionFPV">{selectedVideo.description}</div>}
                <div className="songContainerFPV">
                    {selectedVideo && 
                    <div className="songFPV">{selectedVideo.song}</div>}
                </div>
                {/* LIKES, SHARES AND LINK */}
                <div className="likesSharesLinkWrapperFPV">
                    <div className="likesSharesContainerFPV">
                        <div className="likesWrapperFPV">
                            <button className="heartBtnFPV">
                                <span className="iconWrapperFPV">
                                    <img className="iconHeartBtnFPV" src={heartIcon} alt="heart icon"></img>
                                </span>
                                {selectedVideo && <strong className='likesCounterFPV'>{selectedVideo.likesCounter}</strong>}
                            </button>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <button className="heartBtnFPV">
                                <span className="iconWrapperFPV">
                                    <img className="iconHeartBtnFPV" src={commentIcon} alt="comment icon"></img>
                                </span>
                                {selectedVideo &&
                                <strong className='likesCounterFPV'>{selectedVideo.commentsCounter}</strong>}
                            </button>
                        </div>
                        <div className="sharesWrapperFPV">
                            <p className="textSharetoFPV">Share to</p>
                            <span className="shareIconContainFPV">
                                <img className="iconLogoShareFPV" src={whatsIcon} alt="whatsapp icon">
                                </img>
                            </span>
                            <span className="shareIconContainFPV">
                                <img className="iconLogoShareFPV" src={faceIcon} alt="facebook icon">
                                </img>
                            </span>
                            <span className="shareIconContainFPV">
                                <img className="iconLogoShareFPV" src={twitIcon} alt="twitter icon">
                                </img>
                            </span>
                            <span className="shareIconContainFPV">
                                <img className="iconLogoShareFPV" src={shareIcon} alt="share icon">
                                </img>
                            </span>
                            <span className="shareIconContainFPV">
                                <img className="iconLogoShareFPV" src={embedIcon} alt="embed icon">
                                </img>
                            </span>
                        </div>
                    </div>
                    <div className="linkContainerFPV">
                        <p className="pLinkFPV">https://tiktok.com/@username/video/9834562..</p>
                        <button className="buttonCopyLinkFPV">Copy link</button>
                    </div>
                </div>
            </div>
            {/* COMMENTS CONTAINER FPV */}
            <div className="commentsContainerFPV">
            {selectedVideo && selectedVideo.comments.map((comment) => {
  

              let user = comment.username;
              let userComment = comment.comment;
              let userPicture = comment.profilePicture;
              return <CommentFPV 
                user={user} 
                comment={userComment}
                picture={userPicture}/>})};
            </div>
            {/* ADD COMMENT SECTION */}
            <div className="addCommentContainerFPV">HERE YOU CAN ADD COMMENT</div>
        </div>
      </div>
    </Dialog>
  );
}
