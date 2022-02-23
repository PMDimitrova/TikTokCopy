export const getAllVideos = () => {
    let allVideosArr = [];
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`)
        .then(resp => resp.json())
        .then(data => {allVideosArr = Object.values(data)
            console.log(allVideosArr)
        dispatch({type : 'GET_ALL_VIDEOS', payload : allVideosArr}) } )
        
    }
}

export const likeVideo = (videoID)=> {
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body: {id: JSON.stringify(videoID), increment: true}})
            .then(resp => resp.json())
            .then(data => dispatch({type : 'LIKE_VIDEO', payload : data}));
    }
}

export const unlikeVideo = (videoID) =>{
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body:  {id: JSON.stringify(videoID), increment: false}})
        .then(resp => resp.json())
        .then(data => dispatch({type : 'UNLIKE_VIDEO', payload : data}))
    }
}

export const commentVideo = (videoID, inputComment) => {
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body:  {id: JSON.stringify(videoID), inputComment}})
        .then(resp => resp.json())
        .then(data => dispatch({type : 'COMMENT_VIDEO', payload : data}))
    }
}