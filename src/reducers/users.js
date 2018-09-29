import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../actions/users'

export function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_USER_ANSWER: {
            const { authedUser, questionId, answer } = action
            const userResponse = {
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [questionId]: answer
                    }
                }
            }
            return {
                ...state,
                [authedUser]: state[authedUser],
                ...userResponse
            }
        }
        case SAVE_USER_QUESTION: {
            const { question, authedUser } = action
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([question.id])
                }
            }
        }
        default:
            return state
    }
}