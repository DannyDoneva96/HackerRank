function miniMaxSum(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let result = []

    let num = 0
    for (let every of arr) {
        num += every
    }
    result.push(num - max)
    result.push(num - min)


    return result.join(' ')
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))