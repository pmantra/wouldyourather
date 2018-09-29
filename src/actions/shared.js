import { getInitialData, saveQuestionAnswer as saveQuestionAnswerAPI } from '../utils/api'
import { receiveUsers, saveUserAnswer } from './users'
import { receiveQuestions, saveQuestionAnswer } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// todo: change this to selected authed user
const AUTHED_ID = 'sarahedo'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestionAnswer (authedUser, questionId, answer) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswerAPI({ authedUser, questionId, answer })
        .then(() => {
            dispatch(saveQuestionAnswer(authedUser, questionId, answer))
            dispatch(saveUserAnswer(authedUser, questionId, answer))
        })
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn('Error in saving answer ', e)
            alert('There was an error saving vote. Try again ')
        })
    }
}