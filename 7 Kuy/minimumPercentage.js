// https://www.codewars.com/kata/657e578bdc80170abd4dca79/train/javascript

function minimumPercentage(foods) {

  //  <----  hajime!
  const f = foods.reduce((t,c)=> t+ (100-c),0) 
  return 100 - f < 0 ? 0 : 100 - f;
}
