import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER, CREATE_NEW_QUESTION } from '../actions/questions'

export function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            const { authedUser, questionId, answer } = action
            const answeredQuestion = {
                [questionId]: {
                    ...state[questionId],
                    [answer]: {
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.concat([authedUser]),
                    }
                }
            }
            return {
                ...state,
                [questionId]: state[questionId],
                ...answeredQuestion
            }
        case CREATE_NEW_QUESTION:
        const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}