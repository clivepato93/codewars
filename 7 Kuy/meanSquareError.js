// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript/692865c103a7a418715c9ce6
// Arrays
// Mathematics
// Algorithms

const solution = function(f, s) {
  let sum  = 0;
  for(let i = 0; i < f.length;i++){
    sum+= Math.abs(f[i]-s[i])**2
  }
  return sum/f.length
}