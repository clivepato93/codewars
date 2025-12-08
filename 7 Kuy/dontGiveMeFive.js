// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript/69173533b85561364c0c400c
// Mathematics
// Arrays
// Algorithms

function dontGiveMeFive(start, end)
{
  let counter=0;
//   function helper(num){
//     while(num>0){
//       if(num%10==5){
//         return 0
//       }
//       num = Math.floor(num/10);
//     }
//     return 1;
//   }
  while(start<=end){
//     counter+= helper(start)
    const res = ''+start
    if(res.indexOf('5')==-1){
    counter++
      
    }
    start++;
    
  }
  return counter;
}