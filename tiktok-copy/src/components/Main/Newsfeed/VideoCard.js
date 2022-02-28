import React, { useEffect, useRef, useState } from "react";
import FullPageVideo from "../../FullPageVideo/FullPageVideo";
import commentIcon from "../../../images/tiktok-comment-icon.PNG";
import shareIcon from "../../../images/tiktok-share-icon.PNG";
import ShareCompFromVideoCard from "./ShareCompFromVideoCard";
import { useSelector, useDispatch } from "react-redux";
import { toggleFollow } from "../../../redux/actions/allUsersAction";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";

export default function VideoCard({ mp4, isLiked }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.userData.logged);
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

    if (!isOpen) {
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

  // TOGGLE FOLLOW FUNCTION ON FOLLOW BTN
  const iFollowUser = () => {
    const usernameToFollow = mp4.owner;
    userLogged.iFollow.push(usernameToFollow);
    dispatch(toggleFollow(userLogged));
  };
  const iUnFollowUser = () => {
    const usernameToFollow = mp4.owner;
    userLogged.iFollow = userLogged.iFollow.filter(
      (el) => el !== usernameToFollow
    );
    dispatch(toggleFollow(userLogged));
  };
  //TEMPLATE FOR THE FOLLOW BTN
  let followBtnTemplate = (
    <button className="followBtnVideoCard" onClick={iFollowUser}>
      Follow
    </button>
  );

  let unFollowBtnTemplate = (
    <button className="unFollowBtnVideoCard" onClick={iUnFollowUser}>
      Following
    </button>
  );

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
      />

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
            src={mp4.profilePicture}
            alt="Profile pic"
          />
        </span>
        <div className="DescriptionAndVideoContain">
          <div className="descriptionVideoContainer">
            <div className="nameContainerVideoCard">
              <div className="twoNamesContainer">
                {/* USERNAME IN VIDEO CARD */}
                <h3 className="UsernameVideoCard">{mp4.owner}</h3>
                {/* NICKNAME IN VIDEO CARD */}
                <h4 className="nicknameVideoCard">{mp4.nickname}</h4>
              </div>
            </div>
            {/* FOLLOW BTN VIDEO CARD */}

            {/* //***PALMINA to do onClick={handleClickLoginOpen} */}

            {/* {isLogged ?     ---> train of events template
                                (isFollowed ? ('unfollow'): ('follow'))
                                :('follow s action-login')*/}
            {/* } */}
            {/*{isLogged ? (isFollowed ? (<UnFollowButton onClick={iUnFollowUser}/>)*/}
            {/*                        : (<FollowButton onClick={iFollowUser}/>))*/}
            {/*        :(<FollowButton onClick={() => console.log('user not logged')}/>)*/}
            {/*}*/}

            {isFollowed && unFollowBtnTemplate}
            {!isFollowed && followBtnTemplate}
            {/* DESCRIPTION */}
            <div className="descriptionContainVideoCard">{mp4.description}</div>
            {/* SONG */}
            <h4 className="songContainVideoCard">{mp4.song}</h4>
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

            <div className="BtnsWrapper">
              {isLogged ? (
                isLiked ? (
                  <UnlikeButton video={mp4} />
                ) : (
                  <LikeButton
                    video={mp4}
                    isLogged={isLogged}
                  />
                )
              ) : (
                <LikeButton
                  video={mp4}
                  isLogged={isLogged}
                />
              )}

              {/* COMMENT BTN VIDEO CARD */}

              {/* //***PALMINA to do onClick={handleClickLoginOpen} */}
              <button className="buttonActionVideoCard">
                <span
                  className="buttonIconVideoCard"
                  onClick={() => {
                    openDialog(mp4);
                  }}
                >
                  <img src={commentIcon} alt="buttonIconVideoCard" />
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
                  <img src={shareIcon} alt="buttonIconVideoCard" />
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
