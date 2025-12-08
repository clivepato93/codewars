// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript/692593d68c6950c7fce19227
// Strings
// Fundamentals

// use an array 
// push a space when you see an uppercase letter
// simples..
function solution(string) {
  const newStr = [];
  for(let i =0;i<string.length;i++){
    if(/[A-Z]/.test(string[i])){
      newStr.push(' '+string[i])
    }
    else{
      newStr.push(string[i])
    }
  }
  return newStr.join('');
}