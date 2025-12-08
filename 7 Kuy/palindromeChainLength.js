// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript/690a1069282de4afe8cc0e74
// Algorithms
var palindromeChainLength = function(n) {
  let steps = 0
  while(n!=reverseNum(n)){
    steps++;
    n+= reverseNum(n)
  }
  return steps
};

var reverseNum = function(num){
  const digits = [];
  let newNum = 0
  while(num>0){
    digits.push(num%10);
    num = Math.floor(num/10);
  }
  for(let i =0;i<digits.length;i++){
    newNum*=10
    newNum+= digits[i]
  }
  return newNum;
}