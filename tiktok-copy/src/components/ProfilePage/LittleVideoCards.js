import React, { useState } from "react";
import FullPageVideo from "../FullPageVideo/FullPageVideo";
import { useSelector } from "react-redux";

export default function LittleVideoCards({ video }) {
     // FOR THE VIDEO POP UP DIALOG
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const isLogged = useSelector((state) => state.userData.logged);
  const userLogged = useSelector((state) => state.userData);
  const isFollowed = userLogged.iFollow.includes(video.owner);
  let isLiked = false;
  if (video.likedBy.includes(userLogged.username)) {
    isLiked=true;
  } else {
    isLiked=false;
  }

  // FOR THE DIALOG POP UP
  const openDialog = (video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  return (
      <>
      <FullPageVideo
        key={video.id}
        open={isOpen}
        fullScreen={true}
        selectedVideo={selectedVideo}
        isLiked={isLiked}
        isFollowed={isFollowed}
        isLogged={isLogged}
        onClose={() => setIsOpen(false)}
      />

      <div className="LitVideoCardContainer">
      <div className="videoContainer">
        <div className="videoCardContain">
          <video
            onClick={() => {
              openDialog(video);
            }}
            className="videoCardContain"
            src={video.video}
          />
        </div>
      </div>
      <div className="descriptionContainer">
          <div className="descriptionContain">
              {video.description}
          </div>
      </div>
    </div>
      </>
  );
}
