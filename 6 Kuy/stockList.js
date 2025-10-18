// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
// Fundamentals
// Algorithms

function stockList(books, categories) {
  const obj = {};
  let sum = 0;
  for (letter of categories) {
    obj[letter] = 0;
  }
  for (const element of books) {
    const res = element.split(" ");
    if (obj[res[0][0]] != undefined) {
      obj[res[0][[0]]] += +res[1];
      sum+= +res[1]
    }
  }
  const stockCount = []; 
if(sum==0){
    return ''
}
for (letter of categories) {
   
        stockCount.push(`(${letter} : ${obj[letter]})`)

  }
  return stockCount.join(' - ');
}

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  ),
  "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
);

console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  ),
  "(A : 200) - (B : 1140)"
);
