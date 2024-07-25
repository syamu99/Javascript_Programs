// Write a JavaScript program to calculate the factorial of a given number. 
// By asking this question, managers aim to assess the candidate’s algorithmic thinking and understanding of JavaScript programming. 
//The interviewer expects the candidate to demonstrate their knowledge of the factorial concept. 
// Sample answer: A factorial number is the product of all positive integers, which are equal to or less than the given number.  

function factorialNumber(number){
    if (number === 0 || number === 1){
        return 1
    }
    else{
        let fact = 1    ;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
    
    return fact
    }
}
const facto=5;
const result = factorialNumber(facto)
console.log(result,"factorial")