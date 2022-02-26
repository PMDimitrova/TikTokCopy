export const getAllVideos = () => {
    let allVideosArr = [];
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`)
        .then(resp => resp.json())
        .then(data => { 
            for(const key in data) {
                let element = data[key];
                element.id = key;
                allVideosArr.push(element);
            }
        dispatch({type : 'GET_ALL_VIDEOS', payload : allVideosArr}) } )
        
    }
}

export const toggleVideoLike = (video) => {
    return function(dispatch){
        console.log(video, ' video')
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${video.id}/likedBy/.json`, 
        {method: 'PUT', body: JSON.stringify(video.likedBy)})
            .then(resp => resp.json())
            .then(data => dispatch({type : 'TOGGLE_VIDEO_LIKE', payload : {likedBy: data, id: video.id}}));
    }
}

export const commentVideo = (video) => {
    console.log(video)
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos/${video.id}/comments/.json`, 
        {method: 'PUT', body: JSON.stringify(video.comments)})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            dispatch({type : 'ADD_COMMENT', payload : {comments: data, id: video.id}})
        })
    }
}