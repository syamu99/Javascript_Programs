// function removeLastOccurrence(arr, elementToRemove) {
//     // Reverse the array
//     arr.reverse();
  
//     // Find the index of the element to remove
//     const index = arr.indexOf(elementToRemove);
  
//     // If the element is found, remove it using pop
//     if (index !== -1) {
//       arr.splice(index, 1);
//     }
  
//     // Reverse the array back to its original order
//     arr.reverse();
//   }
  
//   // Example usage:
//   const originalArray = [1, 2, 3, 4, 5];
//   const elementToRemove = 4;
//   removeLastOccurrence(originalArray, elementToRemove);
  
//   console.log("Array after removing last occurrence in place:", originalArray);

//using array pop
const arr = ["car","cycle","Bike","lorry","bus","jeep"]
const removeele=arr.pop()
  console.log(removeele)

let indexo = arr.indexOf("Bike")
  console.log(indexo)
  console.log(indexo)

  



