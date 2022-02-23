import './Hashtag.css'
import {RiHashtag} from "react-icons/ri";

export default function Hashtag(props){
    return(
        <div className="hashtagContainer">
            <div className="hashContain">
                <RiHashtag/>
                <p className='hashname'>{props.hashname}</p>
            </div>
        </div>
    )
}