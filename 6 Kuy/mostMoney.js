// https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript

// Object-oriented Programming
// Algorithms

function mostMoney(students) {
  if(students.length==1){
    return students[0].name;
  }
  // your code here
  const s ={}
  let maxS = 0;
  const names = [];
  for(let student of students){
    const sum = student.fives*5 + student.tens* 10 + student.twenties *20;
   
    if(sum> maxS){
    
      maxS = sum;
    }
    s[student.name] = sum;
  }

  for(let student in s){
//     console.log(s[student])
    if(s[student]==maxS){
      names.push(student);
    }
    
  }

  return names.length == students.length? 'all':names[0]
}
