// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

function validate(n){
  let sum = 0;
  let len = 0
  while(n>0){
    let num = (n%10) * (len%2==1?2:1);
    if(num>9) num-=9
    sum+= num
    n = Math.floor(n/10)
    len++;
  }
  console.log(sum)
  return sum%10==0
  
}


console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);