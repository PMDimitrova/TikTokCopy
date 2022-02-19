export const getAllVideos = () => {
    return function(dispatch){
        fetch(`https://tiktok-copy-d2a82-default-rtdb.firebaseio.com/videos.json`)
        .then(resp => resp.json())
        .then(data => dispatch({type : 'GET_ALL_VIDEOS', payload : data}))
    }
}