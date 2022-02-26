import { useSelector } from "react-redux";
import VideoCard from "../Newsfeed/VideoCard";

export default function FollowingPage() {
  const iFollow = useSelector((state) => state.userData.iFollow);
  const allUsersData = useSelector((state) => state.allUsersData.users);
  const userLogged = useSelector((state) => state.userData);
  const allVideos = useSelector((state) => state.allVideoData.videos);

  const myFriends = allUsersData.filter((us) => iFollow.includes(us.username));
  const myFriendsVideoNames = myFriends.map((friend) => friend.myVideos).flat();
  const myFriendsVideos = [];
  for (let i = 0; i < allVideos.length; i++) {
    for (let j = 0; j < myFriendsVideoNames.length; j++) {
      if (allVideos[i].id === myFriendsVideoNames[j]) {
        myFriendsVideos.push(allVideos[i]);
      }
    }
  }

  return (
    <div className="newsfeedVideoContainer">
      <div className="newsfeedVideosContain">
        {myFriendsVideos.map((video, index) => {
          if (video.likedBy.includes(userLogged.username)) {
            return <VideoCard key={index} mp4={video} isLiked={true} />;
          } else {
            return <VideoCard key={index} mp4={video} isLiked={false} />;
          }
        })}
      </div>
    </div>
  );
}
