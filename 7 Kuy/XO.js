// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
// Fundamentals

function XO(str) {
    //code here
//   loop through the string
//   i could setup a variable to 0
//   increment if o decrement if x
  let total = 0;
  for(let i =0;i<str.length;i++){
    if(str[i]=='x' || str[i]=='X'){
      total--;
    }
    else if(str[i]=='o' || str[i]=='O'){
      total++;
    }
  }
  return !total
}
