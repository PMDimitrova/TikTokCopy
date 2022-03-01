import './MainContainer.css';
import Aside from '../Main/Aside/Aside.js';
import NewsfeedVideos from './Newsfeed/Newsfeed';
import FollowingPage from "../Main/FollowingPage/FollowingPage";

export default function MainContainer(props){

    return(
        <div className="MainContainer">
            <Aside />
            {props.newsfeed?<NewsfeedVideos /> : <></>}
            {props.followingAccounts? <FollowingPage/> : <></>}
        </div>
    )
}