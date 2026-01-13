// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
// Fundamentals
// Arrays
function outed(meet, boss){
  let sum =0;
  let n = 0;
  for(let employee in meet){
    sum+= employee === boss ? 2* meet[employee] : 1 * meet[employee];
    n++;
  }
    sum = sum/n;
  return sum<=5? 'Get Out Now!': 'Nice Work Champ!'
}
