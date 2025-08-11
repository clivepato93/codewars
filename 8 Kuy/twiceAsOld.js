// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if(!sonYearsOld) return dadYearsOld

  if(dadYearsOld/sonYearsOld==2) return 0
  const diff = Math.floor((dadYearsOld - sonYearsOld)/2);
  console.log(diff, dadYearsOld - diff,(dadYearsOld - sonYearsOld)-sonYearsOld)
  if(dadYearsOld-(dadYearsOld - diff) == (sonYearsOld*2) ) return   dadYearsOld - diff
  let diff2 = sonYearsOld-(dadYearsOld - sonYearsOld)
  return sonYearsOld-(dadYearsOld - sonYearsOld) ? Math.abs(sonYearsOld-(dadYearsOld - sonYearsOld)): Math.abs((dadYearsOld - sonYearsOld)-sonYearsOld)
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if(!sonYearsOld) return dadYearsOld

  if(dadYearsOld/sonYearsOld==2) return 0
  const diff =dadYearsOld - sonYearsOld;
  if(dadYearsOld-(dadYearsOld - Math.floor(diff/2)) == (sonYearsOld*2) ) return   (dadYearsOld - Math.floor(diff/2))
  // let diff2 = sonYearsOld-(dadYearsOld - sonYearsOld)
  return  Math.abs(sonYearsOld-(dadYearsOld - sonYearsOld))
}


console.log(twiceAsOld(36,7) , 22);
console.log(twiceAsOld(22,1) , 20);
