//Convert HTML Entities

function convertHTML(str) {
  var a = [/&/g, /</g, />/g, /\"/g, /\'/g];
  var b = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

for (var i = 0; i < a.length; i++) {
 str = str.replace(a[i], b[i]);
}

return str;
}

convertHTML("Dolce & Gabbana");