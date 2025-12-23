// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
// Fundamentals
// Strings
function makeUpperCase(str) {
  // Code here
  const newStr =[];
  for(let i = 0;i<str.length;i++){
    newStr[i] = str[i].toUpperCase()
  }
  return newStr.join('');
}