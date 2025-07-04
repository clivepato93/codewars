//https://www.codewars.com/kata/671fd30696d3f42285f7d1f1/train/javascripta
// TAGS
// Lists
// Arrays

function window(length,offset,list) {
    const arr = []
    const originalOffset = offset
    for (let i = 0; i <= list.length; i+=offset) {
        const row = list.slice(i,i+length)
        
       row.length==length? arr.push(row):arr;
        
    }
  return arr;
}