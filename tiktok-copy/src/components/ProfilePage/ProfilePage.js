import Aside from '../Main/Aside/Aside'
import ProfileBioAndVideos from './ProfileBioAndVideos';
import styles from './ProfilePage.module.scss';

export default function ProfilePage(){
        return(
        <div className={styles.myProfileContainer}>
            <Aside />
            <ProfileBioAndVideos/>
        </div>
    )
}