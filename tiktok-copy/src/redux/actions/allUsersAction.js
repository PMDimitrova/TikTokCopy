export const getAllUsers = () => {
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users.json`)
        .then(resp => resp.json())
        .then(data => dispatch({type : 'GET_ALL_USERS', payload : data}))
    }
}