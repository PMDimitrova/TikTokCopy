export const getAllVideos = () => {
    let allVideosArr = [];
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`)
        .then(resp => resp.json())
        .then(data => { 
            for(const key in data) {
                let element = data[key];
                element.id = key;
                allVideosArr.push(element)
            }
            console.log(allVideosArr)
        dispatch({type : 'GET_ALL_VIDEOS', payload : allVideosArr}) } )
        
    }
}

// fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${id}/likedBy/.json`, {
//                 method: 'PUT',
//                 body: JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(data => data);

export const toggleVideoLike = (video) => {
    return function(dispatch){
        console.log(video, ' video')
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${video.id}/likedBy/.json`, 
        {method: 'PUT', body: JSON.stringify(video.likedBy)})
            .then(resp => resp.json())
            .then(data => dispatch({type : 'TOGGLE_VIDEO_LIKE', payload : {likedBy: data, id: video.id}}));
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