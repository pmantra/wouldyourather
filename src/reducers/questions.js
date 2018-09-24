import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

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
        default:
            return state
    }
}