function solution(str){
    
    let isOdd = str.split('')
    const result = str.match(/.{1,2}/g) || [];

     let odd =result.length 

        if(isOdd.length%2!=0){

           let last = result[odd -1]
           let myArr = []
           myArr.push(last)
           myArr.push('_')
           last = myArr.join('')
           result.splice(odd-1,1,last)
        }
   return result
    }

console.log(solution('abcdef'))

//berst solution 

function solution(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}