// https://www.codewars.com/kata/59547688d8e005759e000092/train/javascript
// TAGS
// Fundamentals
// function distributionOf(golds) {
//   //coding and coding..
//   const arr =[0,0]
//   let beggar = false;
//   while(golds.length){
//     const top = golds[0]
//     const bottom = golds[golds.length-1]
//     if(top>=bottom){
//         arr[Number(beggar)]+= top
//         golds.shift()
//     }
//     else{
//         arr[Number(beggar)]+= bottom
//         golds.pop()
//     }
//     beggar = !beggar
//   }
//     return arr;
// }

function distributionOf(golds) {
  //coding and coding..
  const arr = [0, 0];
  while (golds.length) {
    golds[0] >= golds[golds.length - 1]
      ? (arr[golds.length % 2] += golds.shift())
      : (arr[golds.length % 2] += golds.pop());
  }
  return arr;
}
