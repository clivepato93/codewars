

// find out how many commas i need first
// use a counter when it hits 3 add a comma
function groupByCommas(n) {
  if(!n) return ''+n;
  let counter = 3;
  const newN = [];
  const inOrder = [];
  
  while(n){
    if(counter==0){
      newN.push(',')
      counter=3
    }
    newN.push(""+(n%10));
    n = Math.floor(n/10)
    counter--
  }
  for(let i = newN.length; i>=0; i--){
    inOrder.push(newN[i])
  }
  return inOrder.join('')
}