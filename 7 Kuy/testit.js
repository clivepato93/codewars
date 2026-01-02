// https://www.codewars.com/kata/56d949281b5fdc7666000004/train/javascript
// Puzzles
// Games


function testit(a,b){
  const newA = new Set(a);
  const newB = new Set(b);
  return [...newA].concat([...newB]).sort((a,b)=> a-b)
}