//  https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript
// TAGS 
// Mathematics
// Fundamentals

function excludingVatPrice(price){
  // your code
  const vat = price/1.15;
  return (price/1.15)||-1;
}

