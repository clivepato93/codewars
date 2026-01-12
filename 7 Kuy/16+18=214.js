// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
// Algorithms 
//Mathematics
function add(num1, num2) {
  let arr = [];
  while(num1|| num2){
    if(num1 && !num2){
      arr.push(num1%10);
      num1 = Math.floor(num1/10)
    }
    else if(!num1 && num2){
      arr.push(num2%10);
      num2 = Math.floor(num2/10)
    }
    else{
      arr.push(num1%10 + num2%10);
       num1 = Math.floor(num1/10);
      num2 = Math.floor(num2/10)
    }
  }
  return +arr.reverse().join('')
}
