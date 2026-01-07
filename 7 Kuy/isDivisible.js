// https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
// Fundamentals

function isDivisible(...args){
  //Write your code here
  const first = args[0];
  for(let i =1 ;i<args.length;i++){
    if((first%args[i])){
      return false
    }
  }
  return true
}