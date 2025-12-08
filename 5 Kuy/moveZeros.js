// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript/692ecc0a5d47b0e07714d71f
// Arrays
// Sorting
// Algorithms
function moveZeros(nums) {
      let z = 0;
    for(let i = 1;i<nums.length;i++){
        if(nums[z]===0 && nums[i]!==0){
            [nums[z],nums[i]] = [nums[i],nums[z]];
            z++;
        }
        if(nums[z]!==0){
            z++;
        }
    }
  return nums
}