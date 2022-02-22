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