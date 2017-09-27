//Sorted Union

function uniteUnique(arr) {
  var args = Array.from(arguments);
  var unique = [];
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!unique.includes(args[i][j])) {
        unique.push(args[i][j]);
      }
    }
    
  }
  return unique; 
}