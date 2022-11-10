function matchingStrings(strings, queries) {

    let result = []
    for (let everyQ of queries) {
        let counter = 0
        for (let everyS of strings) {

            if (everyQ == everyS) {
                counter++;
            }

        }
        result.push(counter)
    }
    return result
}
console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))