export const getAllUsers = () => {
    let allUsersArr = [];
    return function(dispatch){
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users.json`)
        .then(resp => resp.json())
        .then(data => {allUsersArr = Object.values(data)
            console.log(allUsersArr)
        dispatch({type : 'GET_ALL_USERS', payload : allUsersArr}) } )
    }
}