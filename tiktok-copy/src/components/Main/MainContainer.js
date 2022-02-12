import './MainContainer.css';
import Aside from '../Main/Aside/Aside.js';
import NewsfeedVideos from './Newsfeed/Newsfeed';

export default function MainContainer(){
    return(
        <div className="MainContainer">
            <Aside />
            <NewsfeedVideos />
        </div>
    )
}