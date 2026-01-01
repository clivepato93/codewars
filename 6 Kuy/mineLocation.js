// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript
// Arrays
// Algorithms

function mineLocation(field){
  for(let i =0;i<field.length;i++){
    for(let j=0;j<field[i].length;j++){
      if(field[i][j]) return [i,j]
    }
  }
  return [-1, -1] // your code here
}