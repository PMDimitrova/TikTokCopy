import Hashtag from './Hashtag.js'
export default function DiscoverHashtags(){
    let hash1 = "olympics";
    let hash2 = "winter";
    let hash3 = "Rihanna";
    let hash4 = "games";
    let hash5 = "tiktok";
    let hash6 = "Plamena & Palmina Rock"
    return(
        <div className="discoverContainer">
            <p className="discoverText">Discover</p>
            <div className="discoverListHashs">
                <Hashtag
                hashname={hash1}/>
                <Hashtag
                hashname={hash2}/>
                <Hashtag
                hashname={hash3}/>
                <Hashtag
                hashname={hash4}/>
                <Hashtag
                hashname={hash5}/>
                <Hashtag
                hashname={hash6}/>
            </div>
        </div>
    )
}