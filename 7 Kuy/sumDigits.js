// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
// Fundamentals

function sumDigits(number) {
  let sum =0
  if(number<0) number *= -1;
  while(number){
    sum+= number%10;
    number = Math.floor(number/10)
  }
  return sum
}