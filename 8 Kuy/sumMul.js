// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
// Fundamentals
function sumMul(n,m){
//your idea here
  let sum =0;
  for(let i =1;n*i<m;i++){
    sum+= n*i
  }
  return sum>0?sum:'INVALID'
}