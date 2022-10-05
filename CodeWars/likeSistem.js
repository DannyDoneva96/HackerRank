function solve(array){
if(array.length==0){
    return `no one likes this`
}else if(array.length==1){
   return `${array[0]} likes this`
}else if(array.length==2){
    return `${array[0]} and ${array[1]} like this`

}else if(array.length==3){
    return `${array[0]}, ${array[1]} and ${array[2]} like this`

}else{
    return `${array[0]}, ${array[1]} and ${array.length-2} others like this`

}

}console.log(solve([]))//0
console.log(solve(['Peter']))//1
console.log(solve(['Jacob', 'Alex']))//2
console.log(solve(['Max', 'John', 'Mark']))//3
console.log(solve(['Alex', 'Jacob', 'Mark', 'Max']))//4
ccc