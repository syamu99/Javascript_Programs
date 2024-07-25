// Array Manipulation
// Explanation: The squareEvenNumbers function filters even numbers from the array and then squares each of them using the map function. 
//The result is an array of squared even numbers.
// [1,2,3,4,5,6]
// [4,16,36]

function squareRoot(number){
    let Evensqaure = number.filter((num)=>num%2===1).map(num1=> num1*num1)
    return Evensqaure
}
const element = [1,2,3,4];
const sqareroot = squareRoot(element)
console.log(sqareroot)