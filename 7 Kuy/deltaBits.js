// https://www.codewars.com/kata/538948d4daea7dc4d200023f/train/javascript
// Bits
// Binary
// Algorithms

function convertBits(a, b){
  let bits = 0;
  for(let num = a ^ b; num; num >>=1 ){
    bits += (num & 1) === 1;
  }
  return bits
}