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

export function getLeaderIcon (index) {
    switch(index) {
        case 0:
            return { icon: 'trophy', color: 'yellow' }
        case 1:
            return { icon: 'star', color: 'grey' }
        case 2:
            return { icon: 'circle', color: 'brown' }
        default:
            return { icon: '', color: '' }
    }
}