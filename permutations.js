// function permutations(arr,x = []){

//    if(arr.length == 0) {
//     console.log(x)
//     return x}
//    for (let i = 0; i < arr.length; i++) {
//     const letter = arr[i]
//     // x.push(letter)
//      permutations(arr.filter(e => e !=letter),[...x,letter] )

//    }

// }

function permutations(arr,x = []){

   if(arr.length == 0) {
    console.log(x)
    return x}
   for (let i = 0; i < arr.length; i++) {
    debugger
    // x.pop()
    const letter = arr[i]
    x.push(letter)
     permutations(arr.filter(e => e !=letter),x )
    x.pop()
   }
}

    // function permutations(arr){
    //   const perms = []
    //     for (let index = 0; index < arr.length; index++) {
    //         const newPerms = [];
    //         if(!index){
            
    //       perms.push([arr[index]]);
    //           // console.log(perms)
    //         }
    //       else{
    //             // debugger;
    //         for(let j =0;j<perms.length;j++){
    //           for(let k = 0;k<perms[j].length+1;k++){
                
    //             const currentPerm = [...perms[j]];
    //             currentPerm.splice(k,0,arr[index]);
    //             // newPerms.push(currentPerm);
    //             console.log(perms[j],{currentPerm})
    //             // const newPerm = currentPerm.splice(k,0,arr[index]);
    //             newPerms.push(currentPerm);
    //                       // newPerms.push(currentPerm);
    //           }
    //         }
    //         perms.length = 0;
    //         perms.push(...newPerms);

    //       }
    //     }
    //   console.log(perms);
    // }
console.log(permutations(['A','B','C',]))

// console.log(permutations(["a", "b", "c"]), [
//   ["a", "b", "c"],
//   ["a", "c", "b"],
//   ["b", "a", "c"],
//   ["b", "c", "a"],
//   ["c", "a", "b"],
//   ["c", "b", "a"],
// ]);
