function convertToRoman(num) {
  var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  var convert = '';
      
    for (var i = 0; i < number.length; i++) {
      while (number[i] <= num) {
        convert += romanNumeral[i];
        num -= number[i];
      }
    }
  return convert;
}