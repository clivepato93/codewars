// https://www.codewars.com/kata/5904d222e1bfd3354e000026/train/javascript/690c7fdb750ca5d1ef2ff941
// Arrays
// Fundamentals
function removeDuplication(arr){
 // Here you Go!
//   loop through array 
//   count the occurences of each number
//   loop through array again check the count
//   if it's 1 then add it to the end result
  const filteredArray = []
  const obj = {}
  for(let i =0;i<arr.length;i++){
    if(arr[i] === undefined) continue;
    if(obj[arr[i]]== undefined){
      obj[arr[i]] = 1
    }
    else{
      obj[arr[i]]++;
    }
  }
  for(let i = 0;i<arr.length;i++){
    if(obj[arr[i]]==1){
      filteredArray.push(arr[i])
    }
  }
  return filteredArray;
}