// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript
// Strings
// Algorithms

function grabscrab(anagram, dictionary) {
  // Your code here
  const finalDictionary = []
  const letterCount = Array.from({length:26}).fill(0)
  for (let i = 0; i < anagram.length; i++) {
    letterCount[anagram[i].charCodeAt(0)-97]++;
    
  }
  const compare = letterCount.toString()
  for (let i = 0; i < dictionary.length; i++) {
    const currentWord = Array.from({length:26}).fill(0)
    for (let j = 0; j < dictionary[i].length; j++) {
         currentWord[dictionary[i][j].charCodeAt(0)-97]++;
    
    }
    if(currentWord.toString()==compare){
finalDictionary.push(dictionary[i])
    }
    
  }
  return finalDictionary
}

console.log(grabscrab("trisf", ["first"]), ["first"], "Should have found 'first'");

console.log(grabscrab("oob", ["bob", "baobab"]), [], "Should not have found anything");