
function findMedian(arr) {
 
    let myArr =  arr.sort()
    console.log(myArr)
    const mediana = myArr.length / 2
    return Math.round(mediana)
}

console.log(findMedian([2,3,5,1,4,6]))