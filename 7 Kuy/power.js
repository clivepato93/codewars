// https://www.codewars.com/kata/53270633b7320eeb0500031d/train/javascript/69369af297dbd2551212e131
// Mathematics
// Algorithms

function power(base, exponent){
  // ...
  let n = 1;
  if(exponent>0){
    
  for(let i =0;i< exponent;i++){
    n*= base;
  }
  return n
    
  }
  for(let i =0;i< Math.abs(exponent);i++){
    n/= base;
  }
  return n
}