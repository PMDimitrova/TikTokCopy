import './MainContainer.css';
import Aside from '../Main/Aside/Aside.js';
import NewsfeedVideos from './Newsfeed/Newsfeed';
import LIVE from './Newsfeed/LIVE'
import {useDispatch, useSelector} from "react-redux";
import FollowingPage from "../Main/FollowingPage/FollowingPage";

export default function MainContainer(props){
    // const dispatch = useDispatch();
    // const isLogged = useSelector(state => state.userData.logged);
    // const iFollow = useSelector(state => state.userData.iFollow);

    return(
        <div className="MainContainer">
            <Aside />
            {props.newsfeed?<NewsfeedVideos /> : <></>}
            {props.followingAccounts? <FollowingPage/> : <></>}
        </div>
    )
}