// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript  
// Strings
// Algorithms

var runLengthEncoding = function(str){
//   console.log(str)
  const counter =[]
  for(let i =0; i<str.length;i++){
    const current =[1,str[i]];
    for(let j=i+1;str[j]==str[i];j++){
      current[0]++;
      i++;
    }
    counter.push(current)
    
  }
  

  return counter; // << fix this
}
console.log(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);