// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
// Strings
// Fundamentals

function digits(n) {
  // TODO
  let l = 0;
  while(n){
   n = Math.floor(n/10);
  l++
  }
  return !l?1:l
}