// https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript
// DEBUGGING
// OBJECT-ORIENTED PROGRAMMING
function Warrior(n){
  this.currName = n
  this.name = function(newN){
    if( newN ) {
      return this.currName = newN;
      
    }
    else{
      
      return this.currName
    }  
  }
  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}