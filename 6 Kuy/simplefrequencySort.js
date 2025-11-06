// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

// collect count of each num
// implement a small sort function to pass into the sort function

const frequency ={}
function helper(a,b){
    
    
    if(frequency[a]>frequency[b]){
        return 1
    }
    if(frequency[a]<frequency[b]){
        return -1
    }
      if(frequency[a]==frequency[b]&& a>b) return -1
            if(frequency[a]==frequency[b]&& a<b) return 1

  return 0
  
}
function solve(arr){
  //..
  for(let num of arr){
    if(frequency[num]==undefined){
      frequency[num] = 1;
    }
    
    else{
      frequency[num]++;
    }
  }
  
  return arr.sort((a,b)=> {
   return helper(b,a)})
}

//  console.log(solve([2,2,2,4,1,3]),[2,2,2,1,3,4]);
//  console.log(solve([3,5,3,7,5,3,7]),[3,3,3,5,5,7,7])
//  console.log(solve([2,3,5,3,7,9,5,3,7]),[3,3,3,5,5,7,7,2,9])
//  console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9])
//  console.log(solve([5,9,6,9,6,5,9,9,4,4]),[9,9,9,9,4,4,5,5,6,6])
 console.log(solve([4,4,2,5,1,1,3,3,2,8]),[1,1,2,2,3,3,4,4,5,8])
//  console.log(solve([4,9,5,0,7,3,8,4,9,0]),[0,0,4,4,9,9,3,5,7,8])