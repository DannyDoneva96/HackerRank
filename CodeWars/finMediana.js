function findMedian(int,arr) {

    let myrr= arr.sort(function(a, b){return a-b})

    let median = Number(int)/2 
    console.log(myrr[Math.floor(median)])

}

findMedian(7,[0,1,2,5,6,3,4])