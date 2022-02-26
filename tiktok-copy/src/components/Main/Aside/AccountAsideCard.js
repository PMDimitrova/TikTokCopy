import "./AccountAsideCard.css";
import {useSelector} from "react-redux";

export default function AccountAsideCard(props) {
    const iFollow = useSelector(state => state.userData.iFollow);
    const isLogged = useSelector(state => state.userData.logged);
    const currentUsername = useSelector(state => state.userData.username);
    const allUsersData = useSelector(state => state.allUsersData.users)

    const hardcodedPeople = [
        {
            picture:
                "https://i.pinimg.com/originals/18/99/07/1899072ff62e9455aed4c53be5fe9654.png",
            username: "theRealGenZ",
            nickname: "Gen Z Rlz!",
        },
        {
            picture:
                "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
            username: "katenceto",
            nickname: "Katq Dimitrova",
        },
        {
            picture:
                "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Profile-Picture-4.jpg",
            username: "sweetyKote",
            nickname: "StacyyY",
        },
        {
            picture:
                "https://yt3.ggpht.com/ytc/AKedOLRwu9dNkrSUBVMalOqtIVlOHjeK6KdnDKzpk_3Ji3I=s900-c-k-c0x00ffffff-no-rj",
            username: "MelissaLisa",
            nickname: "Mila Mila",
        },
        {
            picture:
                "https://nstatic.nova.bg/public/pics/nova/article/980x551_1585147686.jpg",
            username: "VasetoStZ",
            nickname: "Vasil",
        },
        {
            picture:
                "data:image/jpeg;base64,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",
            username: "Mimityyy",
            nickname: "Mimityy S. Borisova",
        },
    ]; //suggested accounts for not logged users
    let peopleToDisplay = hardcodedPeople;

        if (isLogged && (props.content==='followedAccounts')){
            peopleToDisplay = allUsersData.filter(us => iFollow.includes(us.username));
            console.log(peopleToDisplay)
        } else if (isLogged && props.content==='suggestedAccounts'){
            peopleToDisplay = allUsersData.filter(us => (!iFollow.includes(us.username) && us.username!== currentUsername));
            console.log(peopleToDisplay)
        }

    return peopleToDisplay.map((person, index) => {
        return (
            <div className="accountAsideCard" key={`key-${index}`}>
                <div className="accountAsidePicLink">
                    <div className="containerPicAside">
                        <img
                            className="profilePictureAsideCard"
                            src={person.picture}
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