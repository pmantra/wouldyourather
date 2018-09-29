export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

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

export function saveNewQuestion (question) {
    return {
        type: SAVE_NEW_QUESTION,
        question
    }
}
