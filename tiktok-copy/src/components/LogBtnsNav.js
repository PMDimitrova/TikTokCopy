import './LogBtnsNav.css';
import videoBtn from '../images/tiktok-video-icon.PNG';
import messageBtn from '../images/tiktok-message-icon.PNG';
import inboxBtn from '../images/tiktok-inbox-icon.PNG';
import profileBtn from '../images/tiktok-profile-icon.PNG';
// import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import UploadVideoPage from "./UploadVideoPage"


export default function LogBtnsNav(){
    return(
        
        <div className='bntsLog'>
            <div className='uploadVideo'>
                <Link to='/videoUpload'><img className='logBtnsEach' src={videoBtn} alt='videoBtn'></img>
                </Link>
                
            </div>
            <div className='textMessages'>
                <img className='logBtnsEach' src={messageBtn} alt='messageBtn'></img>
            </div>
            <div className='inbox'>
                <img className='logBtnsEach' src={inboxBtn} alt='inboxBtn'></img>
            </div>
            <div className='myProfile'>
                <img className='logBtnsEach' src={profileBtn} alt='profileBtn'></img>
            </div>
        </div>

        // {/* <Routes>
        //     <Route path='/videoUpload' element={<UploadVideoPage/>}></Route>
        // </Routes> */}


        
    )
}
