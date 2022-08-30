function plusMinus(arr) {
    // Write your code here
    let n = arr.length
    let positive = 0;
    let negative = 0;
    let zero  = 0;
    
    for (let every of arr){
         let num = Number(every)
          if(num == 0 ){
              zero++
          }else if(num>0){
              positive++
          }else { negative++}
    }
    
    let result = []
    result.push((positive/n).toFixed(6))
    result.push((negative/n).toFixed(6))
    result.push((zero/n).toFixed(6))

        console.log(result.join('\n'))
}
