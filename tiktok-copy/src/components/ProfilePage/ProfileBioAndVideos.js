import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../redux/actions/allUsersAction";
import {useEffect, useState} from "react";
import {getAllVideos} from "../../redux/actions/allVideosAction";
import styles from './ProfilePage.module.scss';
import {RiUserFollowLine} from "react-icons/ri";
import {BiLockAlt} from "react-icons/bi";

export default function ProfileBioAndVideos(props) {
    //with props we would expect to receive a string telling us whether
    // we should show myProfilePage or another user page
    const dispatch = useDispatch();

    const user = useSelector(state => state.userData);
    useEffect(() => {
        dispatch(getAllVideos());
        dispatch(getAllUsers());
    }, []);

    const [showVideos, changeVideoTab] = useState(true);
    const [showLikes, changeLikesTab] = useState(false);

    const allUsers = useSelector(state => state.allUsersData);

    let following = 0;
    let followers = 0;
    let likes = 0;
    let bio = '';

    let searchedUsername = '';

    if (props.pageType === 'myProfile') {
        following = user.iFollow.length; //counting following

        allUsers.users.map(us => { //counting followers
            if (us.iFollow.includes(user.username)) {
                followers++;
            }
        })
        let myVideos = user.myVideos;

        myVideos.map(vid => {
            fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${vid}.json`)
                .then(res => res.json())
                .then((videoData => {
                    let currentLikes = videoData.likedBy.length
                    likes += currentLikes;
                }))
        })

        bio = user.bio;

    } else if (props.pageType === 'userProfile') {
        //todo write logic based on click on another user username
    }

    const ifProfileIsLikedByCurrentUser = () => {
        //todo write logic if we're at another user's profile and not to display the btns in our profile at all
        return true;
    }

    const handleVideosTabClick = () => {
        changeVideoTab(!showVideos);
        changeLikesTab(!showLikes);

    }

    const handleLikesTabClick = () => {
        changeVideoTab(!showVideos);
        changeLikesTab(!showLikes);
    }

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.infoContainer}>
                <div className={styles.userData}>
                    <img className={styles.profilePicture} src={user.profilePicture} alt={'profilePictureOfUser'}/>
                    <div className={styles.namesBox}>
                        <p className={styles.userName}>{user.username}</p>
                        <p className={styles.userNickname}>{user.nickname}</p>
                        {ifProfileIsLikedByCurrentUser() ?
                            (<div className={styles.profileLikedBtns}>
                                <div className={styles.messageButtonBox}>Message</div>
                                <div className={styles.followedIcon}><RiUserFollowLine style={{width: 20, height: 20}}/>
                                </div>
                            </div>)
                            : (<div className={styles.followButtonBox}>Follow</div>)}

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
                    <button className={showVideos ? styles.tabVideosLikedChecked : styles.tabVideosLikedUnchecked}
                            onClick={handleVideosTabClick}>Videos
                    </button>
                    <button className={!showLikes ? styles.tabVideosLikedUnchecked : styles.tabVideosLikedChecked}
                            onClick={handleLikesTabClick}>Likes
                    </button>
                </div>
                {showVideos ? (<div>Here would be the user's videos</div>)
                    : (<div className={styles.likedVideosArePrivate}>
                        <BiLockAlt className={styles.lockIcon}/>
                        <hr/>
                        <div style={{fontWeight:600}}>This user's liked videos are private</div>
                        <hr/>
                        <div>Videos liked by {user.username} are currently hidden</div>
                    </div>)}
            </div>
        </div>

    )
}