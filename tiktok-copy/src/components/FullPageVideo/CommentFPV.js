import './CommentFPV.css';
import commentHeartIcon from '../../images/tiktok-heart-icon-commentsFPV.PNG'
export default function CommentFPV(){
    return(
        <div className="commentWrapperFPV">
            <div className="commentContainFPV">
                <div className="commentProfilePicContainFPV">
                    <span className='profilePicCommentContainerFPV'>
                        <img className='profilePicCommentFPVComments'
                        src= 'https://wallpaperaccess.com/full/2213424.jpg'
                        alt='profile picture'></img>
                    </span>
                </div>
                <div className="commentContentContainFPV">
                    <div className='usernameCommentsFullPageComp'>username</div>
                    <p className='commentCommentsFullPageComp'>comment comment comment</p>
                    <p className='dateCommentsFullPageComp'>2022-02-24 &nbsp;&nbsp;&nbsp; Reply</p>
                </div>
                <div className="commentLikeBtnFPV">
                    <div className='heartNumberCommentsFPV'>
                        <img className='heartCommentIconFPV' 
                        src={commentHeartIcon} 
                        alt='heart icon comment'></img>
                        <span className='counterRandomLikesCommentFPV'>
                            {Math.ceil(Math.random()*100)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}