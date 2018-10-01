export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'
export const SAVE_NEW_USER = 'SAVE_NEW_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveUserAnswer (authedUser, questionId, answer) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

export function saveUserQuestion (question, authedUser) {
    return {
        type: SAVE_USER_QUESTION,
        question,
        authedUser
    }
}

export function saveNewUser (user) {
    return {
        type: SAVE_NEW_USER,
        user
    }
}