import {useDispatch, useSelector} from "react-redux";
import LogBtnsNav from "./components/Navbar/LogBtnsNav";
import NotLogBntsNav from "./components/Navbar/NotLogBntsNav";

export default function TestPage() {
    let id = '-MwWCgKRZ96LglljUc5E';
    const dispatch = useDispatch();
    let allUsersArr = [];
    fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users.json`)
        .then(resp => resp.json())
        .then(data => {
            allUsersArr = Object.values(data);

            console.log( 'here' + allUsersArr)
            dispatch({type: 'GET_ALL_USERS', payload: allUsersArr});
            dispatch({type: 'COMBINE_USERNAME_AND_PROFILE_PICTURE', payload: allUsersArr});
        });



//this is change

    // //get the id of the video
    // fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${id}/likedBy.json`)
    //     .then(res => res.json())
    //     .then(data => {
    //
    //         //push the username as a string
    //         data.push('yesbeeee');
    //
    //         fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${id}/likedBy/.json`, {
    //             method: 'PUT',
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => data);
    //     })
    return (
        <>

        </>


    )


    // fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${id}/likedBy.json`, {
    //     method: 'POST',
    //     body: JSON.stringify(userData)
    // })
    //     .then(res => res.json())
    //     .then(data => data);
    // const videoData = {
    //     comments : [{Vasko_P:'...'}, {pipi90:'brawo!'}],
    //     commentsCounter : 2,
    //     description : "Mydrost ot starite hora",
    //     likedBy : ['plami1234'],
    //     likesCounter : 2323,
    //     owner : "test_user",
    //     nickname : "Test User",
    //     profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQElqY18xp0Ivg/profile-displayphoto-shrink_200_200/0/1520964910793?e=1646870400&v=beta&t=W8Z7GXGLxRms2mVSeax8FzUUnTJcvULIOagiMVu7odc",
    //     sharesCounter : 12,
    //     song : "original sound",
    //     video : "https://firebasestorage.googleapis.com/v0/b/tiktok-635d3.appspot.com/o/babata.mp4?alt=media&token=ff484740-7fd5-437e-a05e-f3e3c8944a4d"
    // }
    //
    // fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json', {
    //     method: 'POST',
    //     body: JSON.stringify(videoData)
    // })
    //     .then(res => res.json())
    //     .then(data => console.log(data));

    // fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         Object.values(data).map(entry => {
    //             console.log(entry)
    //         })
    //     })

}