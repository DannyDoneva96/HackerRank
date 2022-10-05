function isIsogram(str){
     let currentChar=''

     let array = str.toLowerCase().split('')
     let newArray=[]
     for (let i = 0; i < array.length; i++) {
        currentChar=array[i]
        if(newArray.includes(currentChar)){
             return false;
             break;
        }
        newArray.push(currentChar)

     }
     return true;

  }console.log(isIsogram('aba'))
  console.log(isIsogram('moOse'))


  function isIsogram2(str){ 
  return !/(\w).*\1/i.test(str)
}console.log(isIsogram2('aba'))
console.log(isIsogram2('moOse'))