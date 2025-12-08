// http://codewars.com/kata/692c80fa12006b05757089dd/train/javascript/6931cde9e14188ce5f9f1e6a
// Puzzles
// Fundamentals
// Arrays
function validateRace(moves) {
 const finish = {};
  const index = moves.length-1;
  for(let i =0;i<moves.length;i++){
    const startPos = i+moves[i];
    finish[startPos] = true
  }
   for(let i =0;i<moves.length;i++){
     if(finish[i]==undefined){
       return false
     }
   }
  return true;
}