// https://www.codewars.com/kata/62bdf18465dff9005e5367d4/train/javascript

// compare the numbers i think distance/speed
function whoWillWin(arr) {
    if(!arr.length) return "No one raced!";
    // const getN = str=> +str.match(/-?\d+/)[0];
        const getN = str=> +str.match(/-?\d+.\d*/)[0];
  //who will win?
  let disqualified = 0;
  let winner =[];
  let time = Number.MAX_SAFE_INTEGER;
  for(let racer of arr){
      const res = (getN(racer.distanceToRun)/getN(racer.speed))
      if(getN(racer.distanceToRun)<=0||getN(racer.speed)<=0) {
          disqualified++;
          continue;
        }
    else if(res && res<time){
        winner.length = 0;
        winner.push(racer.name)
        time = res
    }
    else if(res== time){
        winner.push(racer.name)
    }
  }
  if(disqualified== arr.length){
    return "Everyone was disqualified!";
  }
  if(winner.length>1){
    return `${winner.length} people tied in ${Math.round(time)} second(s)!`;
  }
  return `${winner[0]} won the race in ${Math.round(time)} second(s)!`;
}  
console.log(whoWillWin([
      {name:"Alex",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"6 meter(s) per second",distanceToRun:"200 meter(s)"},
    ]), "2 people tied in 33 second(s)!");

console.log(whoWillWin([
      {name:"Alex",speed:"3 meter(s) per second",distanceToRun:"100 meter(s)"},
      {name:"Sophia",speed:"6 meter(s) per second",distanceToRun:"300 meter(s)"},
      {name:"Timmy",speed:"4 meter(s) per second",distanceToRun:"200 meter(s)"},
      {name:"Ben",speed:"2 meter(s) per second",distanceToRun:"68 meter(s)"},
    ]), "Alex won the race in 33 second(s)!");


console.log(whoWillWin([
      {name:"A Turtle",speed:"0.1 meter(s) per second",distanceToRun:"1000 meter(s)"}
    ]))