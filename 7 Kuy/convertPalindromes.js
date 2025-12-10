// https://www.codewars.com/kata/5838a66eaed8c259df000003/train/javascript
// Algorithms
function convertPalindromes(numbers) {
// helper function to reverse the number
//   run a map function per number
  const helper=(n)=>{
    let newNumber = 0;
    while(n){
      newNumber *= 10
      newNumber += n%10;
      n = Math.floor(n/10)
    }
    return newNumber;
  }
  
  return numbers.map(n=> n == helper(n)?1:0)
};
