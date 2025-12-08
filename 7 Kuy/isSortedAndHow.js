// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript/691b596a62fcc1fc431929d9
// Arrays
// Sorting
// Fundamentals

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;
  for(let i = 0; i<array.length-1; i++){
    if(array[i]<= array[i+1]){
      continue
    }
    else{
      ascending = false;
      break;
    }
  }
  if(ascending ){
     return 'yes, ascending';
  }
  
 for(let i = 0; i<array.length-1; i++){
    if(array[i]>= array[i+1]){
      continue
    }
    else{
      descending = false;
      break;
    }
  }
   if(descending ){
     return 'yes, descending';
  }
  return 'no'
}