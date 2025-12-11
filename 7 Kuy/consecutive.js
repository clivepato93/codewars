// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript
// Arrays
// Fundamentals
function consecutive(array) {
//code me
let diff = 0

if(array.length){
 let min = array[0];
  let max = array[0];
for(let i = 0;i<array.length;i++){
  min = Math.min(min,array[i]);
  max = Math.max(max,array[i]);
}
  const nums = new Set(array);
  for(min;min<max+1;min++){
    if(!nums.has(min)) diff++;
  }
}
  return diff;
}
