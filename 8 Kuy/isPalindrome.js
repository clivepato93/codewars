// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript/691b5847b5220aa266f8eff5
// Fundamentals
function isPalindrome(x) {
  // your code here
  x = x.toLowerCase();
  let i = 0;
  let j = x.length-1
  while(i<j){
    if(x[i]!=x[j]){
      return false
    }
    i++;
    j--;
  }
  return true
}