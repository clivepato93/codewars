// https://www.codewars.com/kata/69971f385353edeaf428e1b0/train/javascript

function fridgeOrganizer(items) {
  items = items.filter(item=> item.expiryDays >=0)
  
  return items.sort((a,b)=> {
     if( a.isAlmostEmpty && b.isAlmostEmpty == false) return -1
     else if( a.isAlmostEmpty == false && b.isAlmostEmpty) return 1
     else if (a.expiryDays - b.expiryDays) return a.expiryDays - b.expiryDays;
     return a.name > b.name ? 1 : a.name < b.name ? -1 :0
  }).map(item=> item.name)}

    const items = [
      { name: "Milk"        , expiryDays:  3, isAlmostEmpty: false },
      { name: "Jam"         , expiryDays:  3, isAlmostEmpty: true  },
      { name: "Yogurt"      , expiryDays:  1, isAlmostEmpty: false },
      { name: "Old Meat"    , expiryDays: -1, isAlmostEmpty: true  },
      { name: "Today's Tofu", expiryDays:  0, isAlmostEmpty: false }
    ]

    // console.log(fridgeOrganizer(items),["Jam", "Today's Tofu", "Yogurt", "Milk"]);
    console.log(fridgeOrganizer(
  [{"name":"Zucchini","expiryDays":5,"isAlmostEmpty":false},
  {"name":"Apples","expiryDays":5,"isAlmostEmpty":false}]
),[ 'Apples', 'Zucchini' ])
/*
Discard Spoiled: If the days to expiry are less than 0, the item is spoiled. Do not include it in the output.
Empty First: Items that are almost empty come before items that are not.
Expiry: Within those groups, items with the lowest days to expiry come first.
Alphabetical: If both status and expiry are the same, sort by name alphabetically.

*/