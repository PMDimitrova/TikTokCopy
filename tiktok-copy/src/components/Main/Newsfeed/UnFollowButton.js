import { useSelector, useDispatch } from "react-redux";
import { toggleFollow } from "../../../redux/actions/allUsersAction";

export default function UnFollowButton(props){
    const userLogged = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    const iUnFollowUser = () => {
        const usernameToFollow = props.video.owner;
        userLogged.iFollow = userLogged.iFollow.filter(
          (el) => el !== usernameToFollow
        );
        dispatch(toggleFollow(userLogged));
      };
    return(
        <button className="unFollowBtnVideoCard" 
                onClick={iUnFollowUser}>
        Following
        </button>
    )
}