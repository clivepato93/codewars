// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript/691d9f2234ee66dbe6d1c575
// Strings
// Algorithms

function firstNonRepeatingLetter(s) {
  // Add your code here
//   two loops
//   do a tracker
  const counter = {};
  for(let letter of s){
    counter[letter.toLowerCase()] = (counter[letter.toLowerCase()] || 0) +1
    
  }
  for(let letter of s){
    if(counter[letter.toLowerCase()] ==1) return letter
    
  }
  
  return ''
  
}