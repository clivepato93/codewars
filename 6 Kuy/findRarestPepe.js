// https://www.codewars.com/kata/595d4823c31ba629d90000d2/train/javascript/690b4522a446899863e9fef8
// Algorithms

function findRarestPepe(pepes) {
  // your code here
//   count the amount of pepe's
//   determine the rarest one small count
//   loop through counts to provide output
  const pepeChecker ={}
  let rarestPepes = []
  let rareCounter = Number.MAX_SAFE_INTEGER;
  for(let pepe of pepes){
    if(pepeChecker[pepe]== undefined) pepeChecker[pepe] = 1
    else{
      pepeChecker[pepe]++;
    }
  }
  for(let pepe in pepeChecker){
    rareCounter = Math.min(rareCounter,pepeChecker[pepe]);
  }
  for(let pepe in pepeChecker){
   if(pepeChecker[pepe]==rareCounter){
     rarestPepes.push(pepe)
   }
  }
  if(rareCounter >4) return 'No rare pepes!';
  rarestPepes = rarestPepes.sort();
  if(rarestPepes.length ==1) return rarestPepes[0]
  return rarestPepes

}