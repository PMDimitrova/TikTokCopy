import { useEffect } from "react";
import "./Newsfeed.css";
import VideoCard from "./VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../../redux/actions/allVideosAction";

export default function NewsfeedVideos() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVideos());
  }, []);
  const videos = useSelector((state) => state.allVideoData.videos);
  console.log(videos);
  return (
    <div className="newsfeedVideoContainer">
      <div className="newsfeedVideosContain">
        {videos.map((mp4, index) => {
          return <VideoCard key={index} mp4={mp4} />;
        })}
      </div>
    </div>
  );
}
