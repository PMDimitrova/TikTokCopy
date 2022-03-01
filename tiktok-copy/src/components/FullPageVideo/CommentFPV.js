import "./CommentFPV.css";
import commentHeartIcon from "../../images/tiktok-heart-icon-commentsFPV.PNG";
export default function CommentFPV(props) {
  return (
    <div className="commentWrapperFPV">
      <div className="commentContainFPV">
        <div className="commentProfilePicContainFPV">
          <span className="profilePicCommentContainerFPV">
            <img
              className="profilePicCommentFPVComments"
              src={props.picture}
              alt="profile pic"
            />
          </span>
        </div>
        <div className="commentContentContainFPV">
          <div className="usernameCommentsFullPageComp">{props.user}</div>
          <p className="commentCommentsFullPageComp">{props.comment}</p>
          <p className="dateCommentsFullPageComp">
            2022-02-24 &nbsp;&nbsp;&nbsp; Reply
          </p>
        </div>
        <div className="commentLikeBtnFPV">
          <div className="heartNumberCommentsFPV">
            <img
              className="heartCommentIconFPV"
              src={commentHeartIcon}
              alt="heart icon comment"
            />
            <span className="counterRandomLikesCommentFPV">
              {Math.ceil(Math.random() * 100)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
