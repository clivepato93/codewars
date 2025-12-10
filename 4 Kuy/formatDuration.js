// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// Strings
// Date Time
// Algorithms
function formatDuration (seconds) {
  // Complete this function
  if(!seconds) return "now";
  
  const times = [86400,86400,3600,60];
  const v = [0,0,0,0,0];

  v[0] = Math.floor(Math.floor(seconds/86400)/365);
  seconds-= ((v[0]*365)*86400);
  v[1] = Math.floor(seconds/86400);
  seconds -= v[1]*86400;
  v[2] = Math.floor(seconds/3600);
  seconds -= v[2]*3600;
  v[3] =  Math.floor(seconds/60);
  seconds-= v[3]*60;
  v[4] =  seconds;
  seconds-= seconds;
  
  
 
  v[0]?v[0]=`${v[0]} year${v[0]>1?'s':''}`:v[0]='';
  v[1]?v[1]=`${v[1]} day${v[1]>1?'s':''}`:v[1]='';
  v[2]?v[2]=`${v[2]} hour${v[2]>1?'s':''}`:v[2]='';
  v[3]?v[3]=`${v[3]} minute${v[3]>1?'s':''}`:v[3]='';
  v[4]?v[4]=`${v[4]} second${v[4]>1?'s':''}`:v[4]='';
  
  const newArr = v.slice(0,5).filter(v=>v)
  if(newArr.length==1){
    return newArr[0]
  }
  if(newArr.length>1){
    return newArr.slice(0,newArr.length-1).join(', ') + ' and ' + newArr[newArr.length-1]
  }

}
