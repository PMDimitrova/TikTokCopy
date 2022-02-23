import React, { useEffect, useRef, useState } from "react";
import FullPageVideo from "../../FullPageVideo/FullPageVideo";
import heartIcon from "../../../images/tiktok-heart-icon.PNG";
import likeHeartIcon from "../../../images/tiktok-heart-icon-liked.PNG";
import commentIcon from "../../../images/tiktok-comment-icon.PNG";
import shareIcon from "../../../images/tiktok-share-icon.PNG";
import ShareCompFromVideoCard from "./ShareCompFromVideoCard";
import { useSelector } from "react-redux";

export default function VideoCard({ mp4, isLiked }) {

// FOR THE VIDEO PLAY
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [isLiked, setIsLiked] = useState(false)
  const videoRef = useRef(null);
  const scrollArea = useRef(null);
  
  const userLogged = useSelector((state) => state.userData);

const likeVideoCard = () =>{
  
}
// TEMPLATE FOR THE LIKE BUTN
let likeButtonTemplate = (
  <button 
  // onClick={isLiked=true fetch s POST} 
  className="buttonActionVideoCard">
    <span className="buttonIconVideoCard">
      <img src={heartIcon} alt="buttonIconVideoCard"></img>
    </span>
    <strong className="textLikesVideoCard">
      {mp4.likesCounter}
    </strong>
  </button>
);
let unlikeButtonTemplate = (
  <button 
  // onClick={isLiked = false fech s delete s userLogged.username} 
  className="buttonActionVideoCard">
    <span className="buttonIconVideoCard">
      <img src={likeHeartIcon} alt="buttonIconVideoCard"></img>
    </span>
    <strong className="textLikesVideoCard">
      {mp4.likesCounter}
    </strong>
  </button>
);
///

  // const videoInit = () => {
  //   // videoRef.current.play();
  // };

  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.75,
    };

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
  });

// FOR THE DIALOG POP UP
  const openDialog = (mp4) => {
    videoRef.current.pause();
    setSelectedVideo(mp4);
    setIsOpen(true);
  };
  
  return (
    <>
      <FullPageVideo
        open={isOpen}
        fullScreen={true}
        selectedVideo={selectedVideo}
        isLiked={isLiked}
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
            <button className="followBtnVideoCard">Follow</button>
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
          <div className="VideoAndBntsWrapper">
            <div className="VideoWrapper">
              <div className="videoPlayer">
                <video
                  // onLoadedData={videoInit}
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
            <div className="BtnsWrapper">
              {isLiked && unlikeButtonTemplate}
              {!isLiked && likeButtonTemplate}
    {/* COMMENT BTN VIDEO CARD */}
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

                  {mp4.commentsCounter}
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
