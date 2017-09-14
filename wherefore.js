//free code camp Wherefore art thou

function whatIsInAName(collection, source) {
  var arr = collection.filter(function(thing) {
    for (var i in source) {
      if (source[i] != thing[i]) {
          return false;    
      }
    }
    return true;
  });
  
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });