// https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript
// Strings
// Algorithms

function validateWord(s)
{
//   convert to lowercase
//   do a object with chars compare each count
  //Code goes here!
  const s2 = s.toLowerCase()
  const char = {};
  for(let i =0;i<s2.length;i++){
    char[s2[i]] = (char[s2[i]]+1||1)
  }
 const nums = Object.values(char)
 for(let i =0;i<nums.length-1;i++){
   if(nums[i]!=nums[i+1]) return false
 }
  return true
}
