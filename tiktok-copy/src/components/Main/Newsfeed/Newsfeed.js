import './Newsfeed.css';
import VideoCard from './VideoCard';

export default function NewsfeedVideos(){
    return(
        <div className="newsfeedVideoContainer">
            <div className='newsfeedVideosContain'>
                <VideoCard/>
            </div>
        </div>
    )
}