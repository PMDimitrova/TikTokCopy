export const getAllUsers = () => {


    // let allUsersArr = [];
    // return function (dispatch) {
    //     fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users.json`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             allUsersArr = Object.values(data)
    //             console.log('ALL USERS:' + allUsersArr)
    //             dispatch({type: 'GET_ALL_USERS', payload: allUsersArr})
    //         })
    // }
}

export const toggleFollow = (user) => {
    return function (dispatch) {
        fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users/${user.username}/iFollow.json`,
            {method: 'PUT', body: JSON.stringify(user.iFollow)})
            .then(resp => resp.json())
            // .then(data => console.log(data))
            .then(data => dispatch({type: 'TOGGLE_FOLLOW', payload: {iFollow: data}}));
    }
}
