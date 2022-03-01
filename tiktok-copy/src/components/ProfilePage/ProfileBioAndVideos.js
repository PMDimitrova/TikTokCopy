import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, toggleFollow } from "../../redux/actions/allUsersAction";
import { useEffect, useState } from "react";
import { getAllVideos } from "../../redux/actions/allVideosAction";
import styles from "./ProfilePage.module.scss";
import { RiUserFollowLine } from "react-icons/ri";
import { BiLockAlt } from "react-icons/bi";
import * as React from "react";
import { useLocation } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import LittleVideoCards from "./LittleVideoCards";
import "./LittleVideoCards.css";

export default function ProfileBioAndVideos() {
  const dispatch = useDispatch();

  //we get the user we want to display from the <Link>, where this page is called from
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getAllUsers());
  }, []);

  //holding state of what to show in the container - liked or my videos
  const [showVideos, changeVideoTab] = useState(true);
  const [showLikes, changeLikesTab] = useState(false);

  const allUsers = useSelector((state) => state.allUsersData);
  const loggedUser = useSelector((state) => state.userData);

  //TAKING THE USERS OWN VIDEOS
  const allVideos = useSelector((state) => state.allVideoData.videos);
  const myVideoNames = user.myVideos;
  const myVideosArr = [];
  for (let i = 0; i < allVideos.length; i++) {
    for (let j = 0; j < myVideoNames.length; j++) {
      if (allVideos[i].id === myVideoNames[j]) {
        myVideosArr.push(allVideos[i]);
      }
    }
  }

  //stats for user we're displaying
  let following = 0;
  let followers = 0;
  let likes = 0;
  let bio = "";

  following = user.iFollow.length; //counting following

  allUsers.users.map((us) => {
    //counting followers
    if (us.iFollow.includes(user.username)) {
      followers++;
    }
  });
  let myVideos = user.myVideos;

  myVideos.map((vid) => {
    //counting likes
    fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${vid}.json`)
      .then((res) => res.json())
      .then((videoData) => {
        let currentLikes = videoData.likedBy.length;
        likes += currentLikes;
      });
  });

  bio = user.bio; //getting user's bio

  const followUser = () => {
    const usernameToFollow = user.username;
    loggedUser.iFollow.push(usernameToFollow);
    dispatch(toggleFollow(loggedUser));
  };
  const unfollowUser = () => {
    const usernameToFollow = user.username;
    loggedUser.iFollow = loggedUser.iFollow.filter(
      (el) => el !== usernameToFollow
    );
    dispatch(toggleFollow(loggedUser));
  };

  //function returns correct buttons
  const displayCorrectButtonsForUser = () => {
    let isUserFollowedByCurrentUser = loggedUser.iFollow.includes(
      user.username
    );
    if (user.username === loggedUser.username) {
      return <></>;
    } else if (isUserFollowedByCurrentUser) {
      return (
        <div className={styles.profileLikedBtns}>
          <div className={styles.messageButtonBox}>Message</div>
          <HtmlTooltip title="Unfollow" arrow>
            <button className={styles.followedIcon} onClick={unfollowUser}>
              <RiUserFollowLine style={{ width: 20, height: 20 }} />
            </button>
          </HtmlTooltip>
        </div>
      );
    } else if (!isUserFollowedByCurrentUser) {
      return (
        <button className={styles.followButtonBox} onClick={followUser}>
          Follow
        </button>
      );
    }
  };
  // FOR POSITIONING THE TOOLTIP from MUI
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: theme.typography.pxToRem(16),
      left: "10px",
    },
  }));

  //handlers for of what to show in the container - liked or my videos
  const handleVideosTabClick = () => {
    changeVideoTab(!showVideos);
    changeLikesTab(!showLikes);
  };
  const handleLikesTabClick = () => {
    changeVideoTab(!showVideos);
    changeLikesTab(!showLikes);
  };

  //get the correct key, because of naming mismatches in redux & firebase
  let profilePictureSrc = user.profilePicture || user.picture;

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.userData}>
          <img
            className={styles.profilePicture}
            src={profilePictureSrc}
            alt={"profilePictureOfUser"}
          />
          <div className={styles.namesBox}>
            <p className={styles.userName}>{user.username}</p>
            <p className={styles.userNickname}>{user.nickname}</p>
            {/*the function below would decide which buttons to display or nothing at all*/}
            {displayCorrectButtonsForUser()}
          </div>
        </div>
        <div className={styles.followData}>
          <div className={styles.followCounter}>{following}</div>
          Following
          <div className={styles.followCounter}>{followers}</div> Followers
          <div className={styles.followCounter}>{likes}</div> Likes
        </div>
        <div className={styles.bioBox}>{bio}</div>
      </div>
      <div className={styles.videosContainer}>
        <div className={styles.videosTabs}>
          <button
            className={
              showVideos
                ? styles.tabVideosLikedChecked
                : styles.tabVideosLikedUnchecked
            }
            onClick={handleVideosTabClick}
          >
            Videos
          </button>
          <button
            className={
              !showLikes
                ? styles.tabVideosLikedUnchecked
                : styles.tabVideosLikedChecked
            }
            onClick={handleLikesTabClick}
          >
            Liked
          </button>
        </div>
  {/* SHOWING LITTLE VIDEO CARDS */}
        {showVideos ? (
          <div className="LittleVideoCardsWrapper">
            <div className="LittleVideoCardsGrid">
                {myVideosArr.map((video, index) => {
                    return(<LittleVideoCards key={index} video={video}/>)
                })}
            </div>
          </div>
        ) : (
          <div className={styles.likedVideosArePrivate}>
            <BiLockAlt className={styles.lockIcon} />
            <hr />
            <div style={{ fontWeight: 600 }}>
              This user's liked videos are private
            </div>
            <hr />
            <div>Videos liked by {user.username} are currently hidden</div>
          </div>
        )}
      </div>
    </div>
  );
}