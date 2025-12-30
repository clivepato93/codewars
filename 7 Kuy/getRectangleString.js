// https://www.codewars.com/kata/5937ae46377144bb2f000029/train/javascript
// Strings
// ASCII Art
// Algorithms
function getRectangleString(width, height) {
  const res = []
  for(let i =0; i<height;i++){
    if(i==0 || i== height-1){
      res.push(Array.from({length:width},(_,i)=>'*'))
    }
    else{
      const r = []
      for(let j = 0;j<width;j++){
        if(j==0|| j== width-1){
          r.push('*')
        }
        else{
          r.push(' ')
        }
      }
      res.push(r)
    }
  }
    return res.map(row=>row.join('')+'\r\n').join('')
}