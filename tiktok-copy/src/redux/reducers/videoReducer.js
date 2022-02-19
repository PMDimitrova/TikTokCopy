const INITIAL_STATE ={
    comments: [],
    commentsCounter: 0,
    description : "",
    likedBy : [],
    likesCounter: 0,
    owner: "",
    sharesCounter: 0,
    song: "",
    video: ""
}

export const videoReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'LIKE_VIDEO':
            return{
                ...state,
                likesCounter: action.payload
            }
        case 'UNLIKE_VIDEO':
            return{
                ...state,
                likesCounter: action.payload
            }
        case 'COMMENT_VIDEO':
            return{
                ...state,
                comments: action.payload
            }
        default: return state;
    }
}

// {
//     "comments":"[{mitko_pzh: 'egati qkoto'}, {viki-S-01: 'hahaha'}]",
//     "commentsCounter":"2",
//     "description":"total olympic fail!",
//     "likedBy":"",
//     "likesCounter":"5747",
//     "owner":"vldi24t6",
//     "sharesCounter":"4",
//     "song":"Original sound - Eurosport",
//     "video":"https://v16-webapp.tiktok.com/4ef3a055669897b7cb76eac063c95cfc/621076ba/video/tos/useast2a/tos-useast2a-pve-0068/2634359424f74e24859998ea11d0c1c3/?a=1988&br=2012&bt=1006&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3.qnz7ThBjH9DXq&l=2022021822484901022308705123837AF8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3A7Nzw6Zms3OzMzNzczM0ApPGQ2aWc6aDs1Nzs2ZDw0NWdxaF8ucjQwby5gLS1kMTZzczNhXi1hLjI1Y2AuYTUxMy86Yw%3D%3D&vl=&vr="
//  }