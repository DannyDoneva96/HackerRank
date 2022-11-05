function lonelyinteger(a) {
 
let arr = a

let allNums = [...new Set(arr)]
let counter=0
for ( let every of allNums ) {
counter = 0
    for (let num of arr ) {
        if (every== num){
            counter += 1
        }

        
    }if(counter<=1){return every}
}
 



}console.log(lonelyinteger([1,1,2,2,3,3,4]))