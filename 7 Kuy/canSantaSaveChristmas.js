// https://www.codewars.com/kata/5857e8bb9948644aa1000246
// Date Time
// Fundamentals
// split the string 
// i could do a subtract from 24hrs in seconds
// as long as the seconds is greater than minus that should work
function determineTime (durations) {
  //have fun with coding ^.^
  let seconds = 86400;
  for(let i =0;i<durations.length;i++){
    const [hour,mins,secs] = durations[i].split(':');
    seconds -= hour*3600;
    seconds -= mins*60;
    seconds -= secs;
  }
  
  return seconds>=0
}
