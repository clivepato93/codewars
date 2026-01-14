// http://codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
// Fundamentals
function incrementer(nums) { 
  // code goes here
  const newNums = []
  for(let i = 0;i<nums.length;i++){
    newNums[i] = (nums[i]+ i+1)%10
  }
  return newNums;
}