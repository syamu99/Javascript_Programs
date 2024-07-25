function divisibleByprime(num){
    if(num % 2 ===0 && num %3 ===0 && num%5 ===0){
        return true
    }
    for(i = 2; i<Math.sqrt(num); i++){
        if(num%i === 0){
        return false;
    }
}
    return num > 1;
}
const numberToCheck = 31;
const result = divisibleByprime(numberToCheck)
console.log(result);