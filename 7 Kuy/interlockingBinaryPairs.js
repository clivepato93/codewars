// https://www.codewars.com/kata/628e3ee2e1daf90030239e8a/train/javascript
// Binary
// Bits
// Algorithms
function interlockable(a, b) {
  // TODO
  while(a & b){
    if(a & b){
      return false;
    }
    a>>=1;
    b>>=1;
  }
  return true;
}