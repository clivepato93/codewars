// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript/69282f07eb8f9a8a00f94c43
// Fundamentals
// Strings

function highAndLow(numbers){
  // ...
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
    let digit = [];
  for(let i = 0; numbers[i]!==undefined;i++){
    if(numbers[i]!=' '){
      digit.push(numbers[i])
    }
    else{
      min = Math.min(min, +digit.join(''))
      max = Math.max(max, +digit.join(''))
      digit.length = 0;
    }
  }
  min = Math.min(min, +digit.join(''))
      max = Math.max(max, +digit.join(''))
  return `${max} ${min}`
}