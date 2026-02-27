// https://www.codewars.com/kata/69269262ced9e95dc63abd1e/train/javascript
// Fundamentals
// Algorithms
// Data Structures
function jumbler(indices) {

  //  <----  hajime!
  let c = 0;

  while(indices[0]){
  const n = indices.splice(indices[0],1);
    indices = n.concat(indices)
 c++;   
  }

  return c;
}
