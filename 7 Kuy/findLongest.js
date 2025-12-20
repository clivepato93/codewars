// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// i could use convert to string and compare length
// or divide the number until 0
// since it's 7kuy could go with the easier option
function findLongest(array){
// code here
  let curr = array[0];
  for(let i =0; i<array.length;i++){
    if(String(array[i]).length >String(curr).length){
      curr = array[i];
    }
  }
  return curr;
}

// Todo figure out what a solution i seen does 