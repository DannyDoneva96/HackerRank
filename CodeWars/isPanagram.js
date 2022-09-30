// my pathetic solution
function isPanagram(string){const myArr = ['a',"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    

let mySentence = string.toLowerCase().split(' ').join()

for (let each of myArr){
  
  if (!mySentence.includes(each)){ return false ; }

}
return true
}

// best solution 
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  // more solutions

  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }


  function isPangram(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
  }