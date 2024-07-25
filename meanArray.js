//What is .mean?
//The mean (also known as the average) is a measure of central tendency. 
//It is calculated by summing all the values in a dataset and then dividing by the number of values. 
//It gives an idea of the central value of the data. In this implementation, 
//the mean is computed by summing the array elements and dividing by the number of elements in the array.

function mean(array){
    if(array.length ===0)
        return 0;
    const sum = array.reduce((accumulater, currentValue)=> accumulater+currentValue,0)
    return sum/array.length
}

const numbers = [1,20,30,4,51,60]
console.log(mean(numbers))
const emptyArray = []
console.log(mean(emptyArray))