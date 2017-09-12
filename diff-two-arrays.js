//Diff Two Arrays
//https://www.freecodecamp.org/challenges/diff-two-arrays

function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(function(item) {
        if (!arr1.includes(item) || !arr2.includes(item)) {
          return item;
        }
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);