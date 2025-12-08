// https://www.codewars.com/kata/54d3bb4dfc75996c1c000c6d/train/javascript/6911d1711d7d9ecff12fb0e7
// Lists
// Fundamentals

var midpointSum=function(n){
  //your code here
  function helper(start,end = n.length){
    let sum = 0;
    for(let i = start; i < end; i++){
      sum+= n[i]
    }
    return sum 
  }
  for(let i =1; i < n.length-1; i++){
    const left = helper(0,i);
    const right = helper(i+1);
    if(left==right) return i;
  }
  return undefined
};