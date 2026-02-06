// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Strings
// Regular Expressions
// Fundamentals
// loop through str miss the vowels
function disemvowel(str) {
  const vowels =/[aeiou]/i
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if(vowels.test(str[i])=== false){
      newStr.push(str[i])
    }
  }
  return newStr.join('')
}

function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'');
}