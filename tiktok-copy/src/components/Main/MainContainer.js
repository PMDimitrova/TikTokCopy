import './MainContainer.css';
import Aside from '../Main/Aside/Aside.js';
import NewsfeedVideos from './Newsfeed/Newsfeed';
import LIVE from './Newsfeed/LIVE'
import {useDispatch, useSelector} from "react-redux";

export default function MainContainer(props){
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.userData.logged);
    const iFollow = useSelector(state => state.userData.iFollow);

    // if (isLogged){
    //
    //     fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/users.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             let usersWithPicAndNickname = [];
    //             for (const [id, info] of Object.entries(data)) {
    //                 if (iFollow.includes(info.username)){
    //                     let person = {
    //                         profilePicture: info.picture,
    //                         username: info.username,
    //                         nickname: info.nickname
    //                     }
    //                     usersWithPicAndNickname.push(person);
    //                 }
    //             }
    //             dispatch({type : 'SET_USERS_FOR_IFOLLOW_MENU', payload: {usersWithPicAndNickname}})
    //         })
    // }

    return(
        <div className="MainContainer">
            <Aside />
            {props.newsfeed?<NewsfeedVideos /> : <LIVE/>}
        </div>
    )
}