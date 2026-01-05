// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
// Fundamentals
// Lists
function flickSwitch(arr){
  let bool = true;
  const newArr = [];
  for(let i =0;i<arr.length;i++){
    if(arr[i]== 'flick'){
      bool = !bool;
    }
    
    newArr.push(bool);
  }
  return newArr;
}

console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);
