function longestWord(sentence){
    const words= sentence.split(" ")

let longestWord = "";
let maxLength = 0;
for(let word of words){
 currentLength = word.length;
 if(currentLength > maxLength){
    longestWord = word;
    maxLength = currentLength;
 }

}
return longestWord;
}

//exmLPLE
const sentenceelement = "Hi i am THere"
const result = longestWord(sentenceelement)
console.log(result, "output")