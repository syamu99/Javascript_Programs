function fun(...input){
    let sum = 0;
    for(let i of input){
        sum +=i
    }       //
    return sum
}
const arr = [1,2,3]
const result=fun(arr)
console.log(result)

console.log(fun(1,2)); // 3
console.log(fun(1,2,3)); // 6 
console.log(fun(1,2,3,4,5)); // 