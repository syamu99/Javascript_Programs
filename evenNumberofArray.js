function filterEvenNumbers(numbers){
 
    const evenNumber = numbers.filter((numbers)=>numbers%2 == 0)
    return evenNumber

}
const num = [1,2,3,4,5,6,]
const result = filterEvenNumbers(num)
console.log(result,"even")

// write the code for even numbers....
//by used in this filter to create new array