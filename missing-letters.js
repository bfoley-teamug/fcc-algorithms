//Missing Letters

function fearNotLetter(str) {
 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 var start = alphabet.indexOf(str[0]);
 var letters = str.length;


for (var i = start; i < start + letters; i++) {
  if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
   }
return undefined;
 
}

fearNotLetter("abce");