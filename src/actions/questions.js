import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const CREATE_NEW_QUESTION = 'CREATE_NEW_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestionAnswer (authedUser, questionId, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

function createNewQuestion (question) {
    return {
        type: CREATE_NEW_QUESTION,
        question
    }
}

export function handleCreateNewQuestion (question) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion(question)
        .then((question) => dispatch(createNewQuestion(question)))
        .then(() => dispatch(hideLoading()))
        .catch((e) => {
            console.warn('Error in saving question ', e)
            alert('There was an error saving the poll. Try again ')
        })
    }
}
