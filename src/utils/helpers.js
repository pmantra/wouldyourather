export function filterArrayWithAnotherArray (array, anotherArray, matches) {
    return matches
        ? array.filter(item => anotherArray.includes(item.id))
        : array.filter(item => !anotherArray.includes(item.id))
}