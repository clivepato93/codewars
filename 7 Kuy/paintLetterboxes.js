// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript/69130ceff067b8af93e651cd
// Fundamentals

// helper function to divide the numbers
var paintLetterboxes = function(start, end) {
  // Your code here
  const digitCount = [0,0,0,0,0,0,0,0,0,0];
  var helper = function(num){
    while(num>0){
      digitCount[num%10]++;
      num/=10
      num = Math.floor(num)
    }
  }
  for(let i = start;i<=end;i++){
    helper(i)
  }
  return digitCount
}
