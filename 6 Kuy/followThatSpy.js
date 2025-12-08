// https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript/690c8660d27ce9f965c1c01as
// Algorithms

// it should return the places from the given routes
// find the start i think the start is when a first array pos doesn't isn't listed as array pos 2nd ... maybe
function findRoutes(routes) {
  //Your code here...
  const routing = {};
  const places = new Set();
  const finalRoute = [];
  let first;
  for(let route of routes){
    if(routing[route[0]]==undefined){
      routing[route[0]]= route[1]
    }

      places.add(route[1])

  }
//   generate the first
  for(let route of routes){
    
    if(places.has(route[0])){
      continue;
    }
else{
  
     first = route[0];
}

  }
  finalRoute.push(first);
  while(routing[first]){
    finalRoute.push(routing[first])
    first = routing[first];
  }
  return finalRoute.join(', ');
}