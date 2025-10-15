// https://www.codewars.com/kata/5b190aa7803388ec97000054/train/javascript
// TAGS 
// Fundamentals
// Algorithms

function tram(stops, descending, onboarding){
  //your code here
  let currTotal =0;
  let maxTotal = 0
  for(let i=0;i<stops;i++){
    currTotal -= descending[i]
    currTotal += onboarding[i]
    if(currTotal>maxTotal) maxTotal = currTotal
    
  }
    return maxTotal;
}

