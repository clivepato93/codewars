// https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript/6935492da285973d9f3e5107
// Fundamentals
// Strings
// Arrays
function scramble(str, arr) {
  const newArr= [];
  for(let i =0;i<str.length;i++){
    newArr[arr[i]] = str[i];
    
  }
  
  
  return newArr.join('') // your code here
};