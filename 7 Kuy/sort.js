// https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript
// Arrays Fundamentals Sorting
function sort(initialArray, sortingArray) {
//   console.log(arguments)
  
  for(let i =0;i<sortingArray.length-1;i++){
    let currLow = i;
    for (let j = i+1; j < sortingArray.length; j++) {
        if(sortingArray[j]<sortingArray[currLow]){
            currLow = j
        }
        
    }
    [initialArray[i],initialArray[currLow]]= [initialArray[currLow],initialArray[i]];
    [sortingArray[i],sortingArray[currLow]]=[sortingArray[currLow],sortingArray[i]];
  }
return initialArray;
}


console.log(sort( [
    'k', 'z', 'w', 'l',
    'a', 33,  -23, 'w',
    'o', 48
  ],
   [
    3, 8, 0, 1, 2,
    6, 4, 9, 7, 5
  ]),[ 'w', 'l', 'a', 'k', -23, 48, 33, 'o', 'z', 'w' ]
)