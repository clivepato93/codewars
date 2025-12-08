// https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/javascript/6921972f8f14b2c222a8ecb6

// collect the numbers
// do the check then the element after you've looped
function oddBall(arr){
  const digits = {};
  let oddPosition;
  for(let i =0; i<arr.length; i++){
    if(typeof arr[i] == 'number'){
      digits[arr[i]] = true;
    }
    else if(arr[i]== 'odd'){
      oddPosition = i
    }
  }
  
  if(digits[oddPosition]){
    return true
  }
    return false; // your code here
}