function countingSort(arr) {
   let myArr = [];
   let n = Math.max(...arr)  ;

   for (let i = 0; i <= n; i++) {
           myArr.push(0)


   }

   for (let i = 0; i < n; i++) {
    let curNum=  arr[i] 
     if(curNum==undefined){return myArr}

      let counter = 0
      
    for (let every of arr){
         if(curNum == every){
            counter++
         }
    }
    myArr[curNum] = counter
}

return myArr
  
}console.log(countingSort([89,37,29,73,68,82,58,45,84,
    17,88,46,69,60,20,24,34,49,52,80,43,72,92,55,10,49
    ,14,88,77,47,64,43,23,66,64,86,27,63,38,62,75,25,
    58,13,79,30,26,12,94,96,29,92,59,15,98,39,32,81,78
    ,13,15,86,72,45,82,46,42,66,97,85,42,46,56,57,40,54
    ,63,27,32,68,2,64,29,22,38,18,36,60,82,20,75,18,79,
    70,17,56,6,15,11,15,40,17,5,96,84,7,78,28,74,51,67,
    3,48,53,30,46,9,89,40,65,16,61,98,33,3,19,57,84,32,
    27,42,83,60,80,27,17,98,61,7,14,76,74,65,37,2,97,52
    ,12,77,40,41,99,90,29,55,76,71,62,63,46,27,46,51,3,
    11,89,75,52,78,23,96,17,65,85,63,19,16,50,42,4,92,67
    ,51,96,53,7,37,97,45,5,70,73,80,73,39,19,15,43,39,34
    ,4,31,72,26,96,98,17,84,8,76,21,5,86,23,30,95,88,92,
    44,33,7,10,32,1,69,88,10,19,29,8,82,86,25,91,60,47,18
    ,7,36,53,88,40,25,29,69,99,82,93,47,92,25,33,26,8,88,
    83,16,87,31,95,9,0,28,52,20,39,20,81,71,39,10,85,63,22
    ,8,98,67,26,99,96,71,19,64,75,54,35,58,26,40,89,46,67,
    23,53,61,17,69,41,62,64,19,74,48,61,81,38,49,38,69,74
    ,61,20,2,84,48,35,63,91,82,75,98,87,16,35,26,53,9,0,84,75,41,28,25,48,11,0,99,11,10,71,79,58,96,88,94,0,74,75,84,5]))