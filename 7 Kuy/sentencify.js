// https://www.codewars.com/kata/59ad7d2e07157af687000070/train/javascript
// TAGS 
// Strings
// Algorithms
function sentencify(words) {
  // TODO: Write your solution here!
      let word = words[0]
      word = word.replace(/./,res=>res.toUpperCase())
      words[0] = word
  

  return words.join(' ')+'.'
}
