function alphabetPosition(string){
      
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //takes index +1
    let stringArray = string.toLowerCase().split('')
     let result =[];
    for (let i = 0; i < stringArray.length; i++){
        if(alphabet.includes(stringArray[i])){
            result.push(alphabet.indexOf(stringArray[i])+1);
        }
    }
    console.log(result)
}alphabetPosition("The sunset sets at twelve o' clock.")
