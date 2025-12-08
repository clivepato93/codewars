// https://www.codewars.com/kata/57a72cb872292dc43100000c/train/javascript/690b3f61a073f44109e9fe85

function itinerary(travel) {
  // here your code
  const destinations = [];
  for(let place of travel){
    if(destinations.length==0){
      destinations.push(place.in)
      destinations.push(place.out)
    }
    else if(destinations[destinations.length-1]!= place.in){
      destinations.push(place.in)
    }
    if(destinations[destinations.length-1]!= place.out){
      destinations.push(place.out)
    }
  }
  return destinations.join('-')
}