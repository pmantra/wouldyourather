export function filterArrayWithAnotherArray (array, anotherArray, matches) {
    return matches
        ? array.filter(item => anotherArray.includes(item.id))
        : array.filter(item => !anotherArray.includes(item.id))
}

export function isQuestionAnsweredByAuthor (question, author) {
    return question.optionOne.votes.includes(author) || question.optionTwo.votes.includes(author)
}