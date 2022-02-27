import React from "react";

export default function UnlikeButton(props) {
    return (
        <button
            onClick={props.onClick}
            className="buttonActionVideoCard">
    <span className="buttonIconVideoCard">
      <img src={props.pic} alt="buttonIconVideoCard"/>
    </span>
            <strong className="textLikesVideoCard">
                {props.likeByLength}
            </strong>
        </button>
    )
}