function squareDigits(num){
    let result =''
    num = num.toString()
    let array = num.split('')
    for(let i =0 ; i <array.length;i++){
      result +=  Math.pow(array[i],2)
    }
 
 return result;
}
console.log(squareDigits(9111))

      ///Second solution
function squareDigits2(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }console.log(squareDigits2(9111))
    ///Third solution
  function squareDigits3(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
  }