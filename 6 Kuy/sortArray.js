// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript/6914f80fc8611aab3e775f1f
// Fundamentals
// Arrays
// Sorting
function sortArray(array) {
  // Return a sorted array.
  let odds = [];
  let oddIndex = 0;
  for(let i = 0; i < array.length;i++){
    if(array[i]%2){
      odds.push(array[i])
    }
  }
  odds = odds.sort((a,b)=>a-b)
  for(let i=0;i<array.length;i++){
    if(array[i]%2){
      array[i] = odds[oddIndex]
      oddIndex++;
    }
  }
  return array
}