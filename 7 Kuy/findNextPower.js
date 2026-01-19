// https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript
// Fundamentals 
// Mathematics
// Logic
function findNextPower(val, pow_) {
    //your code here
  let n =2 
  while(n**pow_<= val){
    n++;
  }
    return n**pow_;
}
