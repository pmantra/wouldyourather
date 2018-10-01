export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function handleLogin (id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    }
}

export function handleLogout () {
    return (dispatch) => {
        dispatch(setAuthedUser(null))
    }
}
