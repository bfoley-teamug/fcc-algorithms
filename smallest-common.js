//Smallest Common Multiple

function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var high = max;

  for(var i = max; i >= min; i--){
    if(high % i !== 0){
      high += max; 
      i = max;
    } 
  }

  return high;  
}