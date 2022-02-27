import React from "react";

export default function FollowButton(props) {
    return (
        <button
            className="followBtnVideoCard"
            onClick={props.onClick}>
            Follow</button>
    )
}