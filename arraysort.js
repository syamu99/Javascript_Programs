 const arr = [1,2,45,65,78,90,100,43]
const ascendeingdData = arr.sort((a,b)=> a-b ? 1: -1)
console.log(ascendeingdData)
const descendingdData = arr.sort((a,b)=> b-a ? -1: 1)
console.log(descendingdData,"desce")

//Second Highest num
const secondHighestNum = ascendeingdData[ascendeingdData.length - 2]
console.log(secondHighestNum)

//First lowest number
// const lowestNumber = descendingdData[7]
// console.log(lowestNumber)

