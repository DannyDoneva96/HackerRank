function highAndLow(numbers){
     let splited = numbers.split(" ").map(function(e){return Number(e)});
     let min = Math.min(...splited)
     let max = Math.max(...splited)
    result = `${min} ${max} `

      return result.toString()

}highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"