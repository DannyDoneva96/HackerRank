function miniMaxSum(arr) {




    let num1 = 0
    let num2 = 0

    for (let every of arr) {
        if (every !== Math.max(...arr)) {
            num1 += every
        }
    }
    for (let every of arr) {
        if (every !== Math.min(...arr)) {
            num2 += every
        }
    }
    return `${num1} ${num2}`

}
console.log(miniMaxSum([1, 3, 5, 7, 9]))


// MAke diff logis if one of the number appears multiple times

function miniMaxSum(arr) {
    let myArr = arr
    let max = Math.max(...arr)
    let min = Math.min(...arr)
   let num = 0
    let indexMax = arr.indexOf(max)
    myArr.splice(indexMax, 1)
    let indexMin = arr.indexOf(min)
    myArr.splice(indexMin, 1)
    for(let every of arr){ num += every}

     console.log(`${min+num} ${max+num}`)


}
console.log(miniMaxSum([5, 5, 5, 5, 5]))


// Best Solution 