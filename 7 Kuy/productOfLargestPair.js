// https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript
// Fundamentals
// Arrays
// Algorithms
// Sorting
function maxProduct(a) {
  // ...
  let maxN = Math.max(...a);
  let second = Number.MIN_VALUE;
  for(let i = 0; i < a.length; i++){
    if(a[i]>second && a[i]<maxN) second = a[i]
  }
 return maxN * second ;

}
