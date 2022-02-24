import './Aside.css';
import MainNavAside from './MainNavAside.js'
import AccountsNavAsideComp from './AccountsNavAsideComp';
import DiscoverHashtags from './DiscoverHashtags';
import FooterAside from './FooterAside.js';
import BigLoginBtn from './BigLoginBtn';
import {useSelector} from "react-redux";

export default function Aside(){
    const isLogged = useSelector(state => state.userData.logged);

    // const usersTheUserIsFollowing = useSelector(state =>state.userData.usernamesAndProfilePictures);

    const HardcodedPeople = [
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "vladi24t6",
            nickname: "Vladito",
        },
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "katenceto",
            nickname: "Katq Dimitrova",
        },
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "sweetyKote",
            nickname: "Ivan",
        },
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "MelissaLisa",
            nickname: "Mila Mila",
        },
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "Vaseto",
            nickname: "Vasil",
        },
        {
            profilePicture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "Mimityyy",
            nickname: "Mariika",
        },
    ];

    return (
        <div className='AsideContainer'>
            <div className='asideInsideContain'>
                <div className='asideInside'>
                    <MainNavAside/>

                    {!isLogged && <BigLoginBtn/>}

                    <AccountsNavAsideComp
                        // title={"Suggested accounts"} people={HardcodedPeople}/>
                        title={"Suggested accounts"}/>

                    {isLogged && <AccountsNavAsideComp
                        // title={"Following accounts"} people={HardcodedPeople}/>}
                        title={"Following accounts"}/>}
                    <DiscoverHashtags/>
                    <FooterAside/>
                </div>
            </div>
        </div>
    )
}