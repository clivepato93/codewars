// https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript
// TAGS 
// Strings
// Algorithms

function doubles(s,loopAgain = false){
    //..
    let newString='';
    for (let i = 0; i < s.length; i++) {
        if(s[i]!=s[i+1]) newString+=s[i]
        else{
            i++;
            loopAgain = true
        }
        
    }

    return loopAgain? doubles(newString,false):newString
}
