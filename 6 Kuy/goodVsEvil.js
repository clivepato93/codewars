// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

// Algorithms

function goodVsEvil(good, evil){
  const g = [1, 2, 3, 3, 4, 10];
  const e = [1,2,2,2,3,5,10];
  const goodV = good.split(' ');
  const evilV = evil.split(' ');
  const gSum = goodV.reduce((t,c,i)=> t +  goodV[i]* +g[i],0 )
    const eSum = evilV.reduce((t,c,i)=> t +  evilV[i]* +e[i],0 )
    if(gSum==eSum){
      return 'Battle Result: No victor on this battle field';
    }
  if(gSum>eSum){
      return 'Battle Result: Good triumphs over Evil';
    }
  return 'Battle Result: Evil eradicates all trace of Good';

}
