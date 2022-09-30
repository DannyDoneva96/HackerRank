
var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
     let input = iterable[0]
      let other = iterable[1]
      let result = []
      if (typeof input === 'string') {
          input.split()
      }
      let previous;
      for (let i = 0; i < input.length; i++) {
  
          if (i == 0) {
              result.push(input[i])
              previous = input[i]
          }
          if (previous !== input[i]) {
              result.push(input[i])
              previous = input[i]
          }
  
      }
  
      return  other == result ? true :false;
  }

console.log(uniqueInOrder(('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B']))