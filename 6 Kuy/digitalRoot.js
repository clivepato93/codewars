// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// Mathematics 
// Algorithms
function digitalRoot(n) {
  // ...
  while(n>9){
    let newN = 0;
    while(n){
      newN += n%10;
      n = Math.floor(n/10)
    }
    n = newN;
  }
  return n
}
