// https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript
// Fundamentals
function quicksum(packet){
  // Code time :)
  let sum = 0;
  for(let i = 0; i<packet.length;i++){
    if(packet[i]== ' '){
      continue;
    }
    if(/[A-Z]/.test(packet[i])){
      sum+= (i+1)*(packet[i].charCodeAt(0)-64);
    }
    else{
      return 0
    }
  }
  return sum;
}
