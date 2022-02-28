import React from "react";
import './Newsfeed.css';
import { useSelector, useDispatch } from "react-redux";
import {toggleVideoLike} from '../../../redux/actions/allVideosAction';
import likedHeartIcon from '../../../images/tiktok-heart-icon-liked.PNG';

export default function UnlikeButton(props) {
    const dispatch = useDispatch();
    const userLogged = useSelector((state) => state.userData);

    const unlikeVideoCard = () => {
        const username = userLogged.username;
        props.video.likedBy = props.video.likedBy.filter((el) => el !== username)
        dispatch(toggleVideoLike(props.video))
      }
  return (
    <button onClick={unlikeVideoCard} className="buttonActionVideoCard">
      <span className="buttonIconVideoCard">
        <img src={likedHeartIcon} alt="buttonIconVideoCard" />
      </span>
      {props.video && <strong className="textLikesVideoCard">{props.video.likedBy.length}</strong>}
    </button>
  );
}
