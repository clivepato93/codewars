// https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript
// Puzzles
// Games
function testit(s){
  return s.split(' ').map(word=> word.replace(/[a-z]$/, e => e.toUpperCase())).join(' ');
}
