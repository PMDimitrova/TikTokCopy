import './MainContainer.css';
import Aside from '../Main/Aside/Aside.js';
import NewsfeedVideos from './Newsfeed/Newsfeed';
import LIVE from './Newsfeed/LIVE'

export default function MainContainer(props){
    return(
        <div className="MainContainer">
            <Aside />
            {props.newsfeed?<NewsfeedVideos /> : <LIVE/>}
            
        </div>
    )
}