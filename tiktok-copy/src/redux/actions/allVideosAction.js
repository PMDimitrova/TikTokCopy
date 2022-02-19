export const getAllVideos = () => {
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json`)
        .then(resp => resp.json())
        .then(data => dispatch({type : 'GET_ALL_VIDEOS', payload : data}))
    }
}