// https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript
// Strings
// Fundamentals
function isKiss( words ){
  // Have Fun!
  const newWords = words.split(/\s/);
  for(let word of newWords){
    if(word.length>newWords.length){
      return 'Keep It Simple Stupid';
    }
  }
  return 'Good work Joe!';
}