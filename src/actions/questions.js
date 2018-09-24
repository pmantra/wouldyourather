export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

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