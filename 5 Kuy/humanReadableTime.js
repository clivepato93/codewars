// http://codewars.com/kata/52685f7382004e774f0001f7/train/javascript/6915e37b9f7b95a847288907
// Date Time
// Mathematics
// Algorithms
// 3600 is an hour

function humanReadable (seconds) {
  let hours  = Math.floor(seconds/3600);
  seconds -= hours *3600
  let minutes = Math.floor(seconds/60);
  seconds -= minutes * 60;
  hours = hours<10?'0'+hours:''+hours;
  minutes = minutes<10?'0'+minutes:''+minutes;
  seconds = seconds<10?'0'+seconds:''+seconds;
  return hours+':'+minutes+':'+seconds;
}