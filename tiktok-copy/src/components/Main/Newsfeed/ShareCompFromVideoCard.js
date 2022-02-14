import embedIcon from '../../../images/tiktok-share-1.PNG'
import shareIcon from '../../../images/tiktok-share-2.PNG'
import twitIcon from '../../../images/tiktok-share-3.PNG'
import faceIcon from '../../../images/tiktok-share-4.PNG'
import whatsIcon from '../../../images/tiktok-share-5.PNG'
import copyIcon from '../../../images/tiktok-share-6.PNG'

export default function ShareCompFromVideoCard(){
    return(
        <div className="shareContainerVideoCard">
            <div className="shareContainVideoCard">
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={embedIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Embed
                    </span>
                </div>
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={shareIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Send to friends
                    </span>
                </div>
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={twitIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Share to Twitter
                    </span>
                </div>
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={faceIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Share to Facebook
                    </span>
                </div>
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={whatsIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Share to WhatsApp
                    </span>
                </div>
                <div className="shareRowVideoCard">
                    <img className="shareRowIcon"
                    src={copyIcon}
                    alt="shareRowIcon">
                    </img>
                    <span className="shareRowText">
                    Copy link
                    </span>
                </div>
            </div>
        </div>
    )
}