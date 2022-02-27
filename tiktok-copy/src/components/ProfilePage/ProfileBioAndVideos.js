import {useSelector} from "react-redux";

export default function ProfileBioAndVideos(props){
    //with props we would expect to receive a string telling us whether
    // we should show myProfilePage or another user page
    const user= useSelector(state => state.userData);

    console.log(user)

    return(
        <>
        <div>

        </div>
        </>

    )
}