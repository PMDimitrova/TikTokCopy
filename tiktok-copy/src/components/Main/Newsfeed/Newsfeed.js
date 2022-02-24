import { useEffect } from "react";
import "./Newsfeed.css";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../../redux/actions/allVideosAction";

export default function NewsfeedVideos() {
  const dispatch = useDispatch();

  //GET DATA FOR VIDEOS FROM REDUX
  useEffect(() => {
    dispatch(getAllVideos());
  }, []);
  const videos = useSelector((state) => state.allVideoData.videos);
  const userLogged = useSelector((state) => state.userData);
  // console.log(videos)

  return (
      <div className="newsfeedVideoContainer">
        <div className="newsfeedVideosContain">
          {videos.map((video, index) => {
            if(video.likedBy.includes(userLogged.username)) {
              return <VideoCard
                  key={index}
                  mp4={video}
                  isLiked={true} />;
            } else {
              return <VideoCard
                  key={index}
                  mp4={video}
                  isLiked={false} />;
            }

          })}
        </div>
      </div>
  );
}
