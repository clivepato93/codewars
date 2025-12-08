// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript/6911bdc84a5195b8f9953799
// Strings
// Fundamentals

function count(string) {
  // TODO
  const obj=  {};
  for(let letter of string){
    if(obj[letter]== undefined){
      obj[letter] =1
    }
    else{
      
    obj[letter]++;
    }
  }
  return obj;
}