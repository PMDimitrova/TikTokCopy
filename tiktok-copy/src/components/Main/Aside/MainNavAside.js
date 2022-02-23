import {Link} from "react-router-dom";
import {RiHome4Line} from "react-icons/ri";
import {BsPeople} from "react-icons/bs";
import {VscDeviceCameraVideo} from "react-icons/vsc";

export default function MainNavAside() {
    return (
        <div className='MainNavAside'>
            <div className='MainAsideBtn'>
                <Link to='/' className='MainBtn'>
                    <RiHome4Line className={'MainAsideTopIcons'}/>
                    <h2 className='MainBtnText'>For You</h2>
                </Link>
            </div>
            <div className='MainAsideBtn'>
                <Link to='/' className='MainBtn'>
                    <BsPeople className={'MainAsideTopIcons'}/>
                    <h2 className='MainBtnText'>Following</h2>
                </Link>
            </div>
            <div className='MainAsideBtn'>
                <Link to='/underconstruction' className='MainBtn'>
                    <VscDeviceCameraVideo className={'MainAsideTopIcons'}/>
                    <h2 className='MainBtnText'>LIVE</h2>
                </Link>
            </div>
        </div>
    )
}