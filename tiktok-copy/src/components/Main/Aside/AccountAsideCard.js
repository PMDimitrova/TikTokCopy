import "./AccountAsideCard.css";
import {useSelector} from "react-redux";

export default function AccountAsideCard(props) {
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
    /* const iFollow = useSelector(state => state.userData.usernamesAndProfilePictures);

    let inputDataLength = props.pplToShow.length;
    let followingPeople = [];
    if (inputDataLength) {
        followingPeople = iFollow;
        // followingPeople = props.pplToShow;
    } else {
        followingPeople = props.pplToShow;
    }
    return props.pplToShow.map((person, index) => {
        return (
            <div className="accountAsideCard" key={index}>
                <div className="accountAsidePicLink">
                    <div className="containerPicAside">
                        <img
                            className="profilePictureAsideCard"
                            src={person.profilePicture}
                            alt="profilePicture"
                        />
                    </div>
                </div>
                <div className="accountAsideNameLink">
                    <div className="containerNameAside">
                        <h4 className="accountNameAside">{person.username}</h4>
                    </div>
                    <p className="accountNicknameAside">{person.nickname}</p>
                </div>
            </div>
        );
    }); */

    return HardcodedPeople.map((person, index) => {
        return (
            <div className="accountAsideCard" key={index}>
                <div className="accountAsidePicLink">
                    <div className="containerPicAside">
                        <img
                            className="profilePictureAsideCard"
                            src={person.profilePicture}
                            alt="profilePicture"
                        />
                    </div>
                </div>
                <div className="accountAsideNameLink">
                    <div className="containerNameAside">
                        <h4 className="accountNameAside">{person.username}</h4>
                    </div>
                    <p className="accountNicknameAside">{person.nickname}</p>
                </div>
            </div>
        );
    });
}
