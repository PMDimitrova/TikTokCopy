// if firebase cannot make a post req, I need to change it to +1
export const likeVideo = (videoID)=> {
    return function(dispatch){
        fetch(`https://tiktok-copy-d2a82-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body: {id: JSON.stringify(videoID), increment: frue}})
            .then(resp => resp.json())
            .then(data => dispatch({type : 'LIKE_VIDEO', payload : data}));
    }
}

export const unlikeVideo = (videoID) =>{
    return function(dispatch){
        fetch(`https://tiktok-copy-d2a82-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body:  {id: JSON.stringify(videoID), increment: tafle}})
        .then(resp => resp.json())
        .then(data => dispatch({type : 'UNLIKE_VIDEO', payload : data}))
    }
}

export const commentVideo = (videoID, inputComment) => {
    return function(dispatch){
        fetch(`https://tiktok-copy-d2a82-default-rtdb.firebaseio.com/videos.json`, 
        {method: 'POST', body:  {id: JSON.stringify(videoID), inputComment}})
        .then(resp => resp.json())
        .then(data => dispatch({type : 'COMMENT_VIDEO', payload : data}))
    }
}
