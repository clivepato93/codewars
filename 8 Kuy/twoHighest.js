// https://www.codewars.com/kata/57ab3c09bb994429df000a4a/train/javascript

function twoHighest(arr) {
 let num=0,num2 = 0
 for(let i =0;i<arr.length;i++){
   if(arr[i]>num && num>num2) [num2=num,num = arr[i]]
   if(arr[i]>num ) num = arr[i]
   if(arr[i]!==num && arr[i]>num2) num2=arr[i]
 }
  if(!num && !num2) return []
  if(num==num2 || !num2) return [num]
  return [num,num2]
}