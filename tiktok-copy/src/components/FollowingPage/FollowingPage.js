import {useSelector} from "react-redux";

export default function FollowingPage(){
    const iFollow = useSelector(state => state.userData.iFollow);
    const allUsersData = useSelector(state => state.allUsersData.users)

    let peopleToDisplay = allUsersData.filter(us => iFollow.includes(us.username));


    return (
       <>
           <div>Here would be the newsfeed only of the accounts we follow</div>
       </>
    )
}