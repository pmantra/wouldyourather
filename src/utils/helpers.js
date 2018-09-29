export function filterArrayWithAnotherArray (array, anotherArray, attribute, matches) {
    return matches
        ? array.filter(item => anotherArray.includes(attribute ? item[attribute] : item))
        : array.filter(item => !anotherArray.includes(attribute ? item[attribute] : item))
}

export function isQuestionAnsweredByAuthor (question, author) {
    return question.optionOne.votes.includes(author) || question.optionTwo.votes.includes(author)
}

export function getUserAvatar (authedUser) {
    return `https://api.adorable.io/avatars/230/${authedUser}@adorable.io`
}

/* export function getStats (user) {
    const questions = user.questions
    const answers = Object.keys(user.answers)
    console.log('questions', questions)
    console.log('answers', answers)
    const asked = filterArrayWithAnotherArray (questions, answers, undefined, true)
    console.group('username', user.name)
    console.log('asked', asked.length)
    console.groupEnd()
} */
