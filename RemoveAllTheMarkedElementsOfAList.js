// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

// Fundamentals
// Algorithms
// Data Structures

Array.prototype.remove_ = function(integer_list, values_list){
  //your code here
  return integer_list.filter(num => !values_list.includes(num))
}
