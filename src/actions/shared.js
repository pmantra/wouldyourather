import { getInitialData, saveQuestionAnswer as saveQuestionAnswerAPI, saveQuestion as saveQuestionAPI } from '../utils/api'
import { receiveUsers, saveUserAnswer, saveUserQuestion } from './users'
import { receiveQuestions, saveQuestionAnswer, saveNewQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
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

export function handleCreateNewQuestion (question, authedUser) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAPI(question)
        .then((savedQuestion) => {
            dispatch(saveNewQuestion(savedQuestion))
            dispatch(saveUserQuestion(savedQuestion, authedUser))
        })
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn('Error in saving question ', e)
            alert('There was an error saving the poll. Try again ')
        })
    }
}