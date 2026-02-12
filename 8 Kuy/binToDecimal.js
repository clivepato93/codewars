// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// Binary
// Fundamentals
// use the ith index 2**i i think...
function binToDec(bin) {
  let total = 0;
  let power = 0
  for(let i = bin.length-1; i >=0; i--) {
    if(bin[i]=== "1"){
      total += 2 ** power;
    }
    power++;
  }
  return total
}
