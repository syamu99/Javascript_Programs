
//We can make the solution even shorter by not initializing a count variable and incrementing the defaultValue instead.
// Mutating a function's parameters is usually not recommended due to causing of side effects. 
//However in this case initialValue is a primitive and incrementing it will not cause any side effects.
function makeCounter(initialValue=0){
return ()=> initialValue++;
}
const counter = makeCounter(5)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


