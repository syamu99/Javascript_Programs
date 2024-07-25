function pallindrome(str){
    return str === str.split("").reverse().join('')
}
const pali =404
const result = pallindrome(pali.toString())
console.log(result,"palindrome")


// The pallindrome function takes a string (str) as its parameter.
// Inside the function, it checks if the string is equal to its reverse.
// It does this by splitting the string into an array of characters, 
//reversing the array, 
//and then joining the reversed array back into a string. 
//The === operator is used for the comparison, which checks for both value and type equality.