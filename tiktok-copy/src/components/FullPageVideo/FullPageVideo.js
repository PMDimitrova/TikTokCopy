import Dialog from "@mui/material/Dialog";
import "./FullPageVideo.css";
import closeLogo from "../../images/tiktok-close-icon-fpv.PNG";
import tiktokSmallLogo from "../../images/tiktok-SmallLogo-icon.png";
import commentIcon from '../../images/tiktok-comment-icon.PNG';
import embedIcon from '../../images/tiktok-share-1.PNG'
import shareIcon from '../../images/tiktok-share-2.PNG'
import twitIcon from '../../images/tiktok-share-3.PNG'
import faceIcon from '../../images/tiktok-share-4.PNG'
import whatsIcon from '../../images/tiktok-share-5.PNG';
import CommentFPV from "./CommentFPV";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import InputEmoji from 'react-input-emoji';
import {commentVideo} from '../../redux/actions/allVideosAction';
import UnlikeButton from '../Main/Newsfeed/UnlikeButton';
import LikeButton from '../Main/Newsfeed/LikeButton';
import UnFollowButton from '../Main/Newsfeed/UnFollowButton';
import FollowButton from "../Main/Newsfeed/FollowButton";
import NotLoggedComment from "./NotLoggedComment";

export default function FullPageVideo(props) {

  const { onClose, selectedVideo, open, isLiked, isFollowed, isLogged } = props;
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userData);

  // CLOSING THE POP UP DIALOG
  const handleClose = (event, reason) => {
    if (reason && reason !== "backdropClick") {
      onClose(selectedVideo);
    }
  };

// FOR EMOJI LIBRARY AND ADD COMMENT
const [ text, setText ] = useState('')
  
function handleOnEnter () {
  // console.log('enter', text)
  const newComment = {
    comment: text,
    profilePicture: userLogged.profilePicture,
    username: userLogged.username
  }
    selectedVideo.comments.push(newComment)
    dispatch(commentVideo(selectedVideo))
    setText('');
}

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
                    />}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="closeBtnFPV">
            <img src={closeLogo} alt="closeLogo"/>
          </button>
          <div className="tiktokSmallLogo">
            <img src={tiktokSmallLogo} alt="tiktokSmallLogo"/>
          </div>
        </div>

{/* SECOND HALF CONTAINER FOR THE COMMENTS AND DESCRIPTION */}
        <div className="commentsContainFullPageVideo">
            {/* PROFILE PIC, NAMES AND FOLLOW BTN CONTAINER */}
            <div className="infoContainerFPV">
                <div className="profilePictureContainFPV">
                    <div className="profilePicContainFPV">
                      {selectedVideo && <img className="avatarPicFPV" src={selectedVideo.profilePicture} alt="profile pic"/>}
                    </div>
                </div>
                <div className="usernameNickameContainerFPV">
                    {selectedVideo &&
                    <div className="usernameContainerFPV">{selectedVideo.owner}</div>}
                    {selectedVideo && 
                    <div className="nicknameContainerFPV"> {selectedVideo.nickname}</div>}
                </div>
                {isFollowed?
                  (<UnFollowButton video={selectedVideo} className={'unFollowBtnFPV'}/>):
                  (<FollowButton video={selectedVideo} className={'followBtnFPV'} isLogged={isLogged}/>)}
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
                            {selectedVideo && 
                            (isLiked?
                              (<UnlikeButton video={selectedVideo} />): 
                              (<LikeButton video={selectedVideo} isLogged={isLogged}/>))}
                            
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <button className="buttonActionVideoCard">
                                <span className="buttonIconVideoCard">
                                    <img className="iconHeartBtnFPV" src={commentIcon} alt="comment icon"/>
                                </span>
                                {selectedVideo &&
                                <strong className='likesCounterFPV'>{selectedVideo.comments.length}</strong>}
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
            {isLogged? 
            (<div className="commentsContainerFPV">
              {selectedVideo && selectedVideo.comments.map((comment, index) => {
              let user = comment.username;
              let userComment = comment.comment;
              let userPicture = comment.profilePicture;
              return <CommentFPV 
              key={index}
              user={user} 
              comment={userComment}
              picture={userPicture}/>})}
            </div>)
            :(<NotLoggedComment/>)}
            {/* ADD COMMENT SECTION */}
            {isLogged? 
            (<div className="addCommentContainerFPV">
              <div className="addCommentWrapperFPV">
                <div className="addCommentWrapFPV">
                  <div className="addCommentInputEmoji">
                      <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Add comment..."
                        />
                  </div>
                  <div 
                  onClick={handleOnEnter}
                  className="postBtnAddCommentFPV">Post</div>
                </div>
              </div>
            </div>)
            :(<></>)}
        </div>
      </div>
    </Dialog>
  );
}
