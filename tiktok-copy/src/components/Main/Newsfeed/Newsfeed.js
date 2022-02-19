import './Newsfeed.css';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from "react-redux";
import {getAllVideos} from '../../../redux/actions/allVideosAction';


export default function NewsfeedVideos(){
    const dispatch = useDispatch();
    
    dispatch(getAllVideos())
    const videos = useSelector(state => state.videos);
    console.log(videos)
    return(
        <div className="newsfeedVideoContainer">
            <div className='newsfeedVideosContain'>

                {/* <VideoCard/> */}
                {/* <VideoCard/> */}
            </div>
        </div>
    )
}