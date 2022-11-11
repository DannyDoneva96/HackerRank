function countingSort(arr) {
       let n = Math.max(...arr)
     let myArr = [];
     for(let i = 0;i<=n;i++) {
        myArr.push(0)
     }

    for (let i = 0; i <= arr.length; i++) {
          myArr[arr[i]] =  myArr[arr[i]]+1
    }
 
    return myArr
}

console.log(countingSort([1,1,3,2,1]))

