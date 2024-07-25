const inputNumber = 1274;
const result = sumDigits(inputNumber)
console.log(result,"Output")
function sumDigits(number){
    sum = 0;
    const numberstr =  number.toString()
    for(i=0; i<numberstr.length ;i++){
    sum += parseInt(numberstr[i])

    }
    return sum
}
console.log(`Sum of the digits of ${inputNumber} is: ${result}`);

 

// const inputNumber = 1274;
// const result = subDigits(inputNumber)
// console.log(result,"Output")
// function subDigits(number){
//     sub = 0;
//     const numberstr =  number.toString()
//     for(i=0; i<numberstr.length ;i++){
//     sub -= parseInt(numberstr[i])

//     }
//     return sub
// }
// console.log(`Sum of the digits of ${inputNumber} is: ${result}`);
