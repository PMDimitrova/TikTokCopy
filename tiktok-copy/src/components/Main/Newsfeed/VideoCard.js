export default function VideoCard(){
    const profilePeople = [
        {
          profilePicture:
            "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
          username: "vladi24t6",
          nickname: "Vladito",
          myUploadedVideos: [{description: 'sport game play', 
                            song: 'Original sound - Metalika', 
                            video: 'https://v16-webapp.tiktok.com/2d3a908bac7cda39f520a450457fc159/620866d0/video/tos/useast2a/tos-useast2a-pve-0068/c6b5883fd29b4cd68e754189eff17bcd/?a=1988&br=3506&bt=1753&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.qnz7ThIjA6DXq&l=2022021220023801022308015002B58BDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVmcDc6Zm52OjMzNzczM0ApaGU8aWhmPDs1N2U3aGdnOWdpaWtucjRvaXFgLS1kMTZzczEtXmM0NmJjY2IwL2IyMl86Yw%3D%3D&vl=&vr=', 
                            likes: 456,
                            comments: 346,
                            shares: 5},
                            {description: 'makeup time, wine time, girls night', 
                            song: 'Original sound - Beyonce - Girls', 
                            video: 'url', 
                            likes: 9843,
                            comments: 100,
                            shares: 45}],
        iFollow: [{},{}]
        },
        {
          profilePicture:
            "http://images6.fanpop.com/image/photos/41700000/It-s-a-girl-prettygirls-41785076-564-1002.jpg",
          username: "katenceto",
          nickname: "Katq Dimitrova",
          myUploadedVideos: [{description: 'javaScript project', 
                            song: 'Original sound - Justin Timberlake - Cry me a river', 
                            video: 'url', 
                            likes: 7,
                            comments: 2,
                            shares: 0}],
        iFollow: [{},{}]
        }
      ];
    return(
        <div className="VideoCard">
            <span className="profilePhotoVideoCard">
                <img className="profilePicVideoCard" src={profilePeople[0].profilePicture} alt="Profile picture"></img>
            </span>
            <div className="DescriptionAndVideoContain">
                <div className="descriptionVideoContainer">
                    <div className="nameContainerVideoCard">
                        <div className="twoNamesContainer">
                            <h3 className="UsernameVideoCard">{profilePeople[0].username}</h3>
                            <h4 className="nicknameVideoCard">{profilePeople[0].nickname}</h4>
                        </div>
                    </div>
                    <button className="followBtnVideoCard">
                        Follow
                    </button>
                    <div className="descriptionContainVideoCard">{profilePeople[0].myUploadedVideos[0].description}</div>
                    <h4 className="songContainVideoCard">{profilePeople[0].myUploadedVideos[0].song}</h4>
                </div>
                <div className="VideoAndBntsWrapper">
                    <div className="VideoWrapper">
                        {/* <canvas> */}
                            <div className="videoPlayer">
                                {/* <div className="theVideo"> */}
                                    <video playsInline autoPlay src='https://v16-webapp.tiktok.com/2d3a908bac7cda39f520a450457fc159/620866d0/video/tos/useast2a/tos-useast2a-pve-0068/c6b5883fd29b4cd68e754189eff17bcd/?a=1988&br=3506&bt=1753&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.qnz7ThIjA6DXq&l=2022021220023801022308015002B58BDA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzVmcDc6Zm52OjMzNzczM0ApaGU8aWhmPDs1N2U3aGdnOWdpaWtucjRvaXFgLS1kMTZzczEtXmM0NmJjY2IwL2IyMl86Yw%3D%3D&vl=&vr='/>
                                        {/* <source src={profilePeople[0].myUploadedVideos[0].video} type='video/mp4'/> */}
                                    {/* 
                                </div> */}
                            </div>
                        {/* </canvas> */}
                    </div>
                    <div className="BtnsWrapper"></div>
                </div>
            </div>
        </div>
    )
}