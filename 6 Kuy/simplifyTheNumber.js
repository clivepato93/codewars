// https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/train/javascript
// Fundamentals
function simplify(n){
//You can do this!
  let m = 0;
  let arr = [];
  
  while(n){
   if(m){
      n % 10 ? arr.push(`${n%10}*${10**m}`): arr;
   }
  else{
    n % 10 ? arr.push(`${n%10}`): arr;
  }
    n = Math.floor(n/10);
    m++;
  }
  return arr.reverse().join('+')
}
