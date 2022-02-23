import { useEffect } from "react";
import "./Newsfeed.css";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../../redux/actions/allVideosAction";
// import { getAllUsers } from "../../../redux/actions/allUsersAction";

export default function NewsfeedVideos() {
  const dispatch = useDispatch();

  //GET DATA FOR VIDEOS FROM REDUX
  useEffect(() => {
    dispatch(getAllVideos());
  }, []);
  const videos = useSelector((state) => state.allVideoData.videos);
  const userLogged = useSelector((state) => state.userData);
  console.log(videos)

  //GET DATA FOR USERS FROM REDUX
  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);
  // const users = useSelector((state) => state.allUsersData.users);
  // console.log(users)

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
