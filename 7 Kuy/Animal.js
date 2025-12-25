// https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
// Object-oriented Programming
// Fundamentals
class Animal {
// your code here
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  toString(){
    return `${this.name} is a ${this.type}`
  }
}