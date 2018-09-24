export function filterArrayWithAnotherArray (array, anotherArray, matching) {
    return matching
        ? array.filter(item => anotherArray.includes(item.id))
        : array.filter(item => !anotherArray.includes(item.id))
}