// https://www.codewars.com/kata/64de4832c734e7036b455536/train/javascript
// Algorithms
// Matrix
// Arrays

// 2 ≤ Array.length ≤ 100
// 5 ≤ Array[n].length ≤ 100
// 3 ≤ Submarine size ≤ 100
// 0 ≤ Submarine depth ≤ 100
// The submarine is always one
// The submarine will always start - '(' and end - ')'
function getTask(arr){
  for(let i = 0; i< arr.length; i++){
    for(let j = 0; j< arr[i].length; j++){
      if(arr[i][j]=='('){
        let size =1;
        for(let k =j+1; arr[i][k]=='O'||arr[i][k]==')';k++){
          size++;
        }
        if(i==0 && arr[i][j+size-1]== ')'){
        return 'Look for a submarine on the surface';
        }
        else if(i<=size && arr[i][j+size-1]== ')'){
        return `Start searching for a submarine at ${i} depth`;
        }
        else if(i>size && arr[i][j+size-1]== ')'){
        return `Emergency search for a possibly damaged submarine at ${i} depth`;
        }
        return 'Emergency assistance to victims';
      }
    }
  }
  return 'Look for a submarine on the surface'
}

const signal1 = [ ['~','(','O',')','~',] ]

const signal2 = [
                  ['~','~','~','~','~',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                  ['ˑ','(','O',')','ˑ',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                ]

const signal3 = [
                  ['~','~','~','~','~',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                  ['ˑ','(','O',')','ˑ',],
                ]

const signal4 = [
                  ['~','~','~','~','~',],
                  ['ˑ','(','ˑ',')','ˑ',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                ]

const signal5 = [
                  ['~','(','~','~',')',],
                  ['ˑ','ˑ','ˑ','ˑ','ˑ',],
                ]

 console.log(getTask(signal1), 'Look for a submarine on the surface' );
 console.log(getTask(signal2), 'Start searching for a submarine at 2 depth' );
 console.log(getTask(signal3), 'Emergency search for a possibly damaged submarine at 4 depth' );
 console.log(getTask(signal4), 'Emergency assistance to victims' );
 console.log(getTask(signal5), 'Emergency assistance to victims' );