import React, { useRef, useState } from "react";
import video from "../../../videos/IMG_6662.MP4";
import FullPageVideo from "../../FullPageVideo/FullPageVideo";
import heartIcon from '../../../images/tiktok-heart-icon.PNG';
import commentIcon from '../../../images/tiktok-comment-icon.PNG';
import shareIcon from '../../../images/tiktok-share-icon.PNG';

export default function VideoCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const videoInit = () => {
    videoRef.current.play();
  };
//   const videoStop =() => {
//     videoRef.current.pause();
//   }
  const openDialog = (choosenVideo) => {
    setSelectedVideo(choosenVideo);
    setIsOpen(true);
  };
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

      <div className="VideoCard">
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
                  {profilePeople[0].username}
                </h3>
                <h4 className="nicknameVideoCard">
                  {profilePeople[0].nickname}
                </h4>
              </div>
            </div>
            <button className="followBtnVideoCard">Follow</button>
            <div className="descriptionContainVideoCard">
              {profilePeople[0].myUploadedVideos[0].description}
            </div>
            <h4 className="songContainVideoCard">
              {profilePeople[0].myUploadedVideos[0].song}
            </h4>
          </div>
          <div className="VideoAndBntsWrapper">
            <div className="VideoWrapper">
              <div className="videoPlayer">
                <video
                  onLoadedData={videoInit}
                  ref={videoRef}
                  onClick={() =>
                    {
                    openDialog(profilePeople[0].myUploadedVideos[0])
                    // videoStop()
                    }
                  }
                  className="videoPlayer"
                  playsInline
                  autoPlay
                  controls
                  src={profilePeople[0].myUploadedVideos[0].video}
                />
              </div>
            </div>
            <div className="BtnsWrapper">
                <button className="buttonActionVideoCard">
                    <span className="buttonIconVideoCard">
                        <img  
                        src={heartIcon} 
                        alt="buttonIconVideoCard">
                        </img>
                    </span>
                    <strong className="textLikesVideoCard">
                        {profilePeople[0].myUploadedVideos[0].likes}
                    </strong>
                </button>
                <button className="buttonActionVideoCard">
                    <span className="buttonIconVideoCard">
                        <img  
                        src={commentIcon} 
                        alt="buttonIconVideoCard">
                        </img>
                    </span>
                    <strong className="textLikesVideoCard">
                        {profilePeople[0].myUploadedVideos[0].comments}
                    </strong>
                </button>
                <button className="buttonActionVideoCard">
                    <span className="buttonIconVideoCard">
                        <img  
                        src={shareIcon} 
                        alt="buttonIconVideoCard">
                        </img>
                    </span>
                    <strong className="textLikesVideoCard">
                        {profilePeople[0].myUploadedVideos[0].shares}
                    </strong>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
