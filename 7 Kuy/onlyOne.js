// https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript
// Algorithms
// spread operator
// set a variable up to false
// negate everytime you spot true
// i think
function onlyOne(...arguments) {
  
  let t = false;
  for(let i =0; i<arguments.length;i++){
    if(arguments[i]) t = !t;
  }
  
  return t;
}
