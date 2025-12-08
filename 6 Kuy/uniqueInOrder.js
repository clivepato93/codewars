// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript/6912049f3afc18d0a5e4886d
// Algorithms
// Fundamentals

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  const order = []
  for(let val of iterable){
    if(!order.length|| order[order.length-1]!=val){
      order.push(val)
    }
    else{
      continue
    }
  }
  return order
}