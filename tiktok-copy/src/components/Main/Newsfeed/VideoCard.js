import React, { useEffect, useRef, useState } from "react";
import video from "../../../videos/IMG_6662.MP4";
import FullPageVideo from "../../FullPageVideo/FullPageVideo";
import heartIcon from "../../../images/tiktok-heart-icon.PNG";
import likeHeartIcon from "../../../images/tiktok-heart-icon-liked.PNG";
import commentIcon from "../../../images/tiktok-comment-icon.PNG";
import shareIcon from "../../../images/tiktok-share-icon.PNG";
import ShareCompFromVideoCard from "./ShareCompFromVideoCard";

export default function VideoCard({ mp4 }) {

// FOR THE VIDEO PLAY
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const scrollArea = useRef(null);
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

  const openDialog = (choosenVideo) => {
    videoRef.current.pause();
    setSelectedVideo(choosenVideo);
    setIsOpen(true);
  };


// TEMPLATE FOR THE LIKE BUTN
const isLiked = false;
  let likeButtonTemplate = (
    <button className="buttonActionVideoCard">
      <span className="buttonIconVideoCard">
        <img src={heartIcon} alt="buttonIconVideoCard"></img>
      </span>
      <strong className="textLikesVideoCard">
        {mp4.likesCounter}
      </strong>
    </button>
  );

  let unlikeButtonTemplate = (
    <button className="buttonActionVideoCard">
      <span className="buttonIconVideoCard">
        <img src={likeHeartIcon} alt="buttonIconVideoCard"></img>
      </span>
      <strong className="textLikesVideoCard">
        {mp4.likesCounter}
      </strong>
    </button>
  );
///
  const profilePeople = [
    {
      profilePicture:
        "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
      username: "vladi24t6",
      nickname: "Vladito",
      myUploadedVideos: [
        {
          description: "sport game play",
          song: "Original sound - Metalika",
          video: video,
          likes: 456,
          comments: 346,
          shares: 5,
        },
        {
          description: "makeup time, wine time, girls night",
          song: "Original sound - Beyonce - Girls",
          video: "url",
          likes: 9843,
          comments: 100,
          shares: 45,
        },
      ],
      iFollow: [{}, {}],
    },
    {
      profilePicture:
        "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
      username: "katenceto",
      nickname: "Katq Dimitrova",
      myUploadedVideos: [
        {
          description: "javaScript project",
          song: "Original sound - Justin Timberlake - Cry me a river",
          video: "url",
          likes: 7,
          comments: 2,
          shares: 0,
        },
      ],
      iFollow: [{}, {}],
    },
  ];
  return (
    <>
      <FullPageVideo
        open={isOpen}
        fullScreen={true}
        selectedVideo={selectedVideo}
        onClose={() => setIsOpen(false)}
      ></FullPageVideo>

      <div className="VideoCard" ref={scrollArea}>
        {isShown && (
          <div className="shareCompFromVideoCard">
            <ShareCompFromVideoCard />
          </div>
        )}

        <span className="profilePhotoVideoCard">
          <img
            className="profilePicVideoCard"
            src={profilePeople[0].profilePicture}
            alt="Profile picture"
          ></img>
        </span>
        <div className="DescriptionAndVideoContain">
          <div className="descriptionVideoContainer">
            <div className="nameContainerVideoCard">
              <div className="twoNamesContainer">
                <h3 className="UsernameVideoCard">
                  {/* {profilePeople[0].username} */}
                  {mp4.owner}
                </h3>
                <h4 className="nicknameVideoCard">
                  {profilePeople[0].nickname}
                </h4>
              </div>
            </div>
            <button className="followBtnVideoCard">Follow</button>
            <div className="descriptionContainVideoCard">
              {/* {profilePeople[0].myUploadedVideos[0].description} */}
              {mp4.description}
            </div>
            <h4 className="songContainVideoCard">
              {/* {profilePeople[0].myUploadedVideos[0].song} */}
              {mp4.song}
            </h4>
          </div>
          <div className="VideoAndBntsWrapper">
            <div className="VideoWrapper">
              <div className="videoPlayer">
                <video
                  // onLoadedData={videoInit}
                  ref={videoRef}
                  onClick={() => {
                    // openDialog(profilePeople[0].myUploadedVideos[0]);
                    openDialog(mp4);
                  }}
                  className="videoPlayer"
                  playsInline
                  loop
                  autoPlay
                  controls
                  // src={profilePeople[0].myUploadedVideos[0].video}
                  src={mp4.video}
                />
              </div>
            </div>
            <div className="BtnsWrapper">
              {isLiked && unlikeButtonTemplate}
              {!isLiked && likeButtonTemplate}
              <button className="buttonActionVideoCard">
                <span
                  className="buttonIconVideoCard"
                  onClick={() => {
                    // openDialog(profilePeople[0].myUploadedVideos[0]);
                    openDialog(mp4);
                  }}
                >
                  <img src={commentIcon} alt="buttonIconVideoCard"></img>
                </span>
                <strong className="textLikesVideoCard">
                  {/* {profilePeople[0].myUploadedVideos[0].comments} */}
                  {mp4.commentsCounter}
                </strong>
              </button>
              <button
                className="buttonActionVideoCard"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <span className="buttonIconVideoCard">
                  <img src={shareIcon} alt="buttonIconVideoCard"></img>
                </span>
                <strong className="textLikesVideoCard">
                  {/* {profilePeople[0].myUploadedVideos[0].shares} */}
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
