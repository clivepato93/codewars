// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript/690b3e64503e6c40dc1f7dc9
// Fundamentals
function vaporcode(string) {
  const characters = []
  for(let i =0;i<string.length;+i++){
    if(string[i]!=' ') characters.push(string[i].toUpperCase())
  }
  return characters.join('  ')
}