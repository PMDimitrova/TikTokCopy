import "./AccountAsideCard.css";
export default function AccountAsideCard() {
  const HarcodetPeople = [
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

  //   fetch("html//dgrdg....")
  //     .then((resp) => resp.json())
  //     .then((data) => {data = hardodetPeople});
  return HarcodetPeople.map((person, index) => {
    return (
      <div className="accountAsideCard" key={index}>
        <div className="accountAsidePicLink">
          <div className="containerPicAside">
            <img
              className="profilePictureAsideCard"
              src={person.profilePicture}
              alt="profilePicture"
            ></img>
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
