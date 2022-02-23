import homeLogo from '../../../images/tiktok-aside-mainNav-iconHome.PNG';
import followingLogo from '../../../images/tiktok-aside-mainNav-iconFollowing.PNG';
import liveLogo from '../../../images/tiktok-aside- mainNav-iconLive.PNG';
import { Link } from "react-router-dom";

export default function MainNavAside(){
    return(
        <div className='MainNavAside'>
            <div className='MainAsideBtn'>
                <Link to='/' className='MainBtn'>
                        <img className='MainBtnLogo' src={homeLogo} alt='MainBtnLogo'/>
                        <h2 className='MainBtnText'>For You</h2>
                </Link>
            </div>
            <div className='MainAsideBtn'>
                <Link to='/' className='MainBtn'>
                    <img className='MainBtnLogo' src={followingLogo} alt='MainBtnLogo'/>
                    <h2 className='MainBtnText'>Following</h2>
                </Link>
            </div>
            <div className='MainAsideBtn'>
                <Link to='/LIVE' className='MainBtn'>
                    <img className='MainBtnLogo' src={liveLogo} alt='MainBtnLogo'/>
                    <h2 className='MainBtnText'>LIVE</h2>
                </Link>
            </div>
        </div>
    )
}