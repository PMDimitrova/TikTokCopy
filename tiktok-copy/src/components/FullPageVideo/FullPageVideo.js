import Dialog from "@mui/material/Dialog";
import "./FullPageVideo.css";
import video from "../../videos/IMG_6662.MP4";
import closeLogo from "../../images/tiktok-close-icon-fpv.PNG";
import tiktokSmallLogo from "../../images/tiktok-SmallLogo-icon.png";
import heartIcon from '../../images/tiktok-heart-icon.PNG'
import likedHeartIcon from '../../images/tiktok-heart-icon-liked.PNG'
import commentIcon from '../../images/tiktok-comment-icon.PNG';
import embedIcon from '../../images/tiktok-share-1.PNG'
import shareIcon from '../../images/tiktok-share-2.PNG'
import twitIcon from '../../images/tiktok-share-3.PNG'
import faceIcon from '../../images/tiktok-share-4.PNG'
import whatsIcon from '../../images/tiktok-share-5.PNG';
import CommentFPV from "./CommentFPV";
import { useSelector, useDispatch } from "react-redux";
import {toggleVideoLike} from '../../redux/actions/allVideosAction';
import {toggleFollow} from '../../redux/actions/allUsersAction';
import { useState } from "react";
import InputEmoji from 'react-input-emoji';
import {commentVideo} from '../../redux/actions/allVideosAction'

export default function FullPageVideo(props) {

  const { onClose, selectedVideo, open, isLiked, isFollowed } = props;
  // console.log(selectedVideo);

  const handleClose = (event, reason) => {
    if (reason && reason !== "backdropClick") {
      onClose(selectedVideo);
    }
  };

  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.userData);
  // TOGGLE LIKE FUNCTION ON LIKE BUTTON
  const likeVideoCard = () =>{
    const username = userLogged.username;
    selectedVideo.likedBy.push(username)
    dispatch(toggleVideoLike(selectedVideo))
  }
  const ulikeVideoCard = () => {
    const username = userLogged.username;
    selectedVideo.likedBy = selectedVideo.likedBy.filter((el) => el !== username)
    dispatch(toggleVideoLike(selectedVideo))
  }
// LIKE BTN TEMPLATE
let likeHeartBtnTemplate = (
  <button 
  onClick={likeVideoCard}
  className="heartBtnFPV">
    <span className="iconWrapperFPV">
      <img className="iconHeartBtnFPV" src={heartIcon} alt="heart icon"></img>
    </span>
  {selectedVideo && <strong className='likesCounterFPV'>{selectedVideo.likesCounter}</strong>}
</button>
)
let unlikeHeartBtnTemplate = (
  <button 
  onClick={ulikeVideoCard}
  className="heartBtnFPV">
    <span className="iconWrapperFPV">
      <img className="iconHeartBtnFPV" src={likedHeartIcon} alt="heart icon"></img>
    </span>
  {selectedVideo && <strong className='likesCounterFPV'>{selectedVideo.likesCounter}</strong>}
</button>
)

//TOGGLE FOLLOW FUNCTION ON FOLLOW BTN
const iFollowUser = () =>{
  const usernameToFollow = selectedVideo.owner;
  userLogged.iFollow.push(usernameToFollow);
  dispatch(toggleFollow(userLogged))
}
const iUnFollowUser = () =>{
  const usernameToFollow = selectedVideo.owner;
  userLogged.iFollow = userLogged.iFollow.filter(el => el !== usernameToFollow)
  dispatch(toggleFollow(userLogged))
}
//FOLLOW BTN TEMPLATE
let followButtonTemplate =(
    <button 
    className="followBtnFPV"
    onClick={iFollowUser}>
      Follow
    </button>
    )
  
  let unFollowButtonTemplate = (
    <button 
    className="unFollowBtnFPV"
    onClick={iUnFollowUser}>
      Following
    </button>
  )
// FOR EMOJI LIBRARY AND ADD COMMENT
const [ text, setText ] = useState('')
  
function handleOnEnter (text) {
  // console.log('enter', text)
  const newComment = {
    comment: text,
    profilePicture: userLogged.profilePicture,
    username: userLogged.username
  }
    selectedVideo.comments.push(newComment)
    // console.log(newComment)
    console.log(userLogged)
    dispatch(commentVideo(selectedVideo))
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
                      {selectedVideo && <img className="avatarPicFPV" src={selectedVideo.profilePicture} alt="profile pic"></img>}
                    </div>
                </div>
                <div className="usernameNickameContainerFPV">
                    {selectedVideo &&
                    <div className="usernameContainerFPV">{selectedVideo.owner}</div>}
                    {selectedVideo && 
                    <div className="nicknameContainerFPV"> {selectedVideo.nickname}</div>}
                </div>
                {isFollowed && unFollowButtonTemplate}
                {!isFollowed && followButtonTemplate}
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
                            {isLiked && unlikeHeartBtnTemplate}
                            {!isLiked && likeHeartBtnTemplate}
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
              {selectedVideo && selectedVideo.comments.map((comment, index) => {
              let user = comment.username;
              let userComment = comment.comment;
              let userPicture = comment.profilePicture;
              return <CommentFPV 
              key={index}
              user={user} 
              comment={userComment}
              picture={userPicture}/>})}
            </div>
            {/* ADD COMMENT SECTION */}
            <div className="addCommentContainerFPV">
              <div className="addCommentWrapperFPV">
                <div className="addCommentWrapFPV">
                  <div className="addCommentInputEmoji">
                      <InputEmoji
                      value={text}
                      onChange={setText}
                      cleanOnEnter
                      onEnter={handleOnEnter}
                      placeholder="Add comment..."
                      ></InputEmoji>
                  </div>
                  <div className="postBtnAddCommentFPV">Post</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Dialog>
  );
}
