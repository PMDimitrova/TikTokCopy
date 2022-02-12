import './Hashtag.css'
import hash from '../../../images/tiktok-hashtag.PNG'

export default function Hashtag(props){
    return(
        <div className="hashtagContainer">
            <div className="hashContain">
                <img src={hash} alt='hashtag pic'></img>
                <p className='hashname'>{props.hashname}</p>
            </div>
        </div>
    )
}