import React, { useEffect, useRef, useState } from "react";
import FullPageVideo from "../../FullPageVideo/FullPageVideo";
import heartIcon from "../../../images/tiktok-heart-icon.PNG";
import likeHeartIcon from "../../../images/tiktok-heart-icon-liked.PNG";
import commentIcon from "../../../images/tiktok-comment-icon.PNG";
import shareIcon from "../../../images/tiktok-share-icon.PNG";
import ShareCompFromVideoCard from "./ShareCompFromVideoCard";
import { useSelector, useDispatch } from "react-redux";
import {toggleVideoLike} from '../../../redux/actions/allVideosAction';
import {toggleFollow} from '../../../redux/actions/allUsersAction';

export default function VideoCard({ mp4, isLiked }) {
  const dispatch = useDispatch();
// FOR THE VIDEO POP UP DIALOG
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
// FOR LIKE AND FOLLOW BTN AND ACTIONS
  const userLogged = useSelector((state) => state.userData);
  const isFollowed = userLogged.iFollow.includes(mp4.owner);
// FOR THE SHARE POP UP BTN
  const [isShown, setIsShown] = useState(false);
// FOR VIDEO PLAY AND PAUSE
  const videoRef = useRef(null);
  const scrollArea = useRef(null);

// FOR VIDEO PLAY ON VIEWPORT
useEffect(() => {
  let options = {
    rootMargin: "0px",
    threshold: 0.75,
  };

  if(!isOpen){
    // FOR VIDEO PLAY AND PAUSE
  let handlePlay = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    });
  };
    let observer = new IntersectionObserver(handlePlay, options);
    observer.observe(videoRef.current);
  }
});

// FOR THE DIALOG POP UP
const openDialog = (mp4) => {
  setSelectedVideo(mp4);
  setIsOpen(true);
};

// TOGGLE LIKE FUNCTION ON LIKE BUTTON
const likeVideoCard = () =>{
  const username = userLogged.username;
  mp4.likedBy.push(username)
  dispatch(toggleVideoLike(mp4))
}
const ulikeVideoCard = () => {
  const username = userLogged.username;
  mp4.likedBy = mp4.likedBy.filter((el) => el !== username)
  dispatch(toggleVideoLike(mp4))
}
// TEMPLATE FOR THE LIKE BUTN
let likeButtonTemplate = (
  <button 
  onClick={likeVideoCard} 
  className="buttonActionVideoCard">
    <span className="buttonIconVideoCard">
      <img src={heartIcon} alt="buttonIconVideoCard"></img>
    </span>
    <strong className="textLikesVideoCard">
      {mp4.likedBy.length}
    </strong>
  </button>
);
let unlikeButtonTemplate = (
  <button 
  onClick={ulikeVideoCard} 
  className="buttonActionVideoCard">
    <span className="buttonIconVideoCard">
      <img src={likeHeartIcon} alt="buttonIconVideoCard"></img>
    </span>
    <strong className="textLikesVideoCard">
      {mp4.likedBy.length}
    </strong>
  </button>
);

// TOGGLE FOLLOW FUNCTION ON FOLLOW BTN
const iFollowUser = () =>{
  const usernameToFollow = mp4.owner;
  userLogged.iFollow.push(usernameToFollow);
  dispatch(toggleFollow(userLogged))
}
const iUnFollowUser = () =>{
  const usernameToFollow = mp4.owner;
  userLogged.iFollow = userLogged.iFollow.filter(el => el !== usernameToFollow)
  dispatch(toggleFollow(userLogged))
}
//TEMPLATE FOR THE FOLLOW BTN
let followBtnTemplate =(
<button 
className="followBtnVideoCard"
onClick={iFollowUser}>
  Follow</button>);

let unFollowBtnTemplate = (
  <button 
className="unFollowBtnVideoCard"
onClick={iUnFollowUser}>
  Following</button>
);
///

  
  return (
    <>
      <FullPageVideo
        key={mp4.id}
        open={isOpen}
        fullScreen={true}
        selectedVideo={selectedVideo}
        isLiked={isLiked}
        isFollowed={isFollowed}
        onClose={() => setIsOpen(false)}
      ></FullPageVideo>

      <div className="VideoCard" ref={scrollArea}>
        {isShown && (
          <div className="shareCompFromVideoCard">
            <ShareCompFromVideoCard />
          </div>
        )}
    {/* PROFILE PIC IN VIDEO CARD */}
        <span className="profilePhotoVideoCard">
          <img
            className="profilePicVideoCard"
            src = {mp4.profilePicture}
            alt="Profile pic"
          ></img>
        </span>
        <div className="DescriptionAndVideoContain">
          <div className="descriptionVideoContainer">
            <div className="nameContainerVideoCard">
              <div className="twoNamesContainer">
    {/* USERNAME IN VIDEO CARD */}
                <h3 className="UsernameVideoCard">
                  {mp4.owner}
                </h3>
    {/* NICKNAME IN VIDEO CARD */}
                <h4 className="nicknameVideoCard">
                  {mp4.nickname}
                </h4>
              </div>
            </div>
    {/* FOLLOW BTN VIDEO CARD */}

{/* //***PALMINA to do onClick={handleClickLoginOpen} */}
            {isFollowed && unFollowBtnTemplate}
            {!isFollowed && followBtnTemplate}
    {/* DESCRIPTION */}
            <div className="descriptionContainVideoCard">
              {mp4.description}
            </div>
    {/* SONG */}
            <h4 className="songContainVideoCard">
              {mp4.song}
            </h4>
          </div>
    {/* VIDEO IN VIDEO CARD */}

{/* //***PALMINA to do onClick={handleClickLoginOpen} */}
          <div className="VideoAndBntsWrapper">
            <div className="VideoWrapper">
              <div className="videoPlayer">
                <video
                  ref={videoRef}
                  onClick={() => {
                    openDialog(mp4);
                  }}
                  className="videoPlayer"
                  playsInline
                  loop
                  autoPlay
                  controls
                  src={mp4.video}
                />
              </div>
            </div>
    {/* LIKE BTN VIDEO CARD*/}

{/* //***PALMINA to do onClick={handleClickLoginOpen} */}
            <div className="BtnsWrapper">
              {isLiked && unlikeButtonTemplate}
              {!isLiked && likeButtonTemplate}
    {/* COMMENT BTN VIDEO CARD */}

{/* //***PALMINA to do onClick={handleClickLoginOpen} */}
              <button className="buttonActionVideoCard">
                <span
                  className="buttonIconVideoCard"
                  onClick={() => {
                    openDialog(mp4);
                  }}
                >
                  <img src={commentIcon} alt="buttonIconVideoCard"></img>
                </span>
                <strong className="textLikesVideoCard">
                  {mp4.comments.length}
                </strong>
              </button>
    {/* SHARE BTN VIDEO CARD */}
              <button
                className="buttonActionVideoCard"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <span className="buttonIconVideoCard">
                  <img src={shareIcon} alt="buttonIconVideoCard"></img>
                </span>
                <strong className="textLikesVideoCard">
                  {mp4.sharesCounter}
                </strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
