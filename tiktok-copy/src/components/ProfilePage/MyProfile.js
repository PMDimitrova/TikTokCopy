import './MyProfile.css'
import Aside from '../Main/Aside/Aside'
import MyProfileBioAndVideos from './MyProfileBioAndVideos';

export default function MyProfile(){
    
        return(
        <div className="myProfileContainer">
            <Aside />
            <MyProfileBioAndVideos/>
        </div>
    )
}