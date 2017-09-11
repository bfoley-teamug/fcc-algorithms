//Sum All Numbers in a Range
//https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

function sumAll(arr) { 
    var a = Math.max(arr[0], arr[1]);
    var b = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i=b; i <= a; i++){
        sum += i;
    }
  return(sum);
}

console.log(sumAll([1, 4]));