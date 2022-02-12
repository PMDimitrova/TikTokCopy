import homeLogo from '../../../images/tiktok-aside-mainNav-iconHome.PNG';
import followingLogo from '../../../images/tiktok-aside-mainNav-iconFollowing.PNG';
import liveLogo from '../../../images/tiktok-aside- mainNav-iconLive.PNG';

export default function MainNavAside(){
    return(
        <div className='MainNavAside'>
            <div className='MainAsideBtn'>
                <a className='MainBtn'>
                    <img className='MainBtnLogo' src={homeLogo} alt='MainBtnLogo'></img>
                    <h2 className='MainBtnText'>For You</h2>
                </a>
            </div>
            <div className='MainAsideBtn'>
                <a className='MainBtn'>
                    <img className='MainBtnLogo' src={followingLogo} alt='MainBtnLogo'></img>
                    <h2 className='MainBtnText'>Following</h2>
                </a>
            </div>
            <div className='MainAsideBtn'>
                <a className='MainBtn'>
                    <img className='MainBtnLogo' src={liveLogo} alt='MainBtnLogo'></img>
                    <h2 className='MainBtnText'>LIVE</h2>
                </a>
            </div>
        </div>
    )
}