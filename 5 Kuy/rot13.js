// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
// Strings
// Ciphers
// Regular Expressions
// Algorithms

function rot13(str) {
const newStr = []
for(let i =0;i<str.length;i++){
  if(/[A-Z]/.test(str[i])){
    const sum = ((str[i].charCodeAt(0)+13)-64)%26
    newStr.push(String.fromCharCode(sum+64))
  }
  else if(/[a-z]/.test(str[i])){
      const sum = ((str[i].charCodeAt(0)+13)-96)%26
    newStr.push(String.fromCharCode(sum+96))
  }
    else{
      newStr.push(str[i])
    }
}
  return newStr.join('')
}