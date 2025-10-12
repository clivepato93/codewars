// https://www.codewars.com/kata/585eaef9851516fcae00004d/train/javascript
// Mathematics
// Fundamentals

function whatListAmIOn(actions){
  //your code here
  let g = 0;
  let b = 0
  for(let i =0;i<actions.length;i++){
    if(/[bfk]/.test(actions[i][0])){
      b++;
    }
    else if(/[gsn]/.test(actions[i][0])){
      g++;
    }
  }
  
  if(g>b){
    return 'nice'
  }
  return 'naughty'
}