import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, CREATE_NEW_QUESTION } from '../actions/questions'

export function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            return {

            }
        case CREATE_NEW_QUESTION:
        const { question } = action
        console.log('question in reducer', question)
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}