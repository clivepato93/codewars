// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript
// Strings
// Mathematics
// Puzzles
function luckCheck(ticket){

  if(/\D/ig.test(ticket)|| ticket.length == 0){

    throw new('invalid number')
  }
  function helper(num){
    let sum = 0;
    while(num){
      sum+= num%10;
      num = Math.floor(num/10)
    }
    return sum
  }
  let len = ticket.length;
  const [left,right] = [+ticket.slice(0,Math.floor(len/2)),+ticket.slice(Math.floor(len/2) + (len%2||0))]
  return helper(left)==helper(right)
  
}
