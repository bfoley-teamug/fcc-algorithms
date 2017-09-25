//DNA Pairing

function pairElement(str) {
 
  return str.split("").map(function (e) {    
    if (e === "C") {
      return ["C", "G"];
     } else if (e === "G") {
      return ["G", "C"];
     } else if (e === "A") {
       return ["A", "T"];
     } else { 
       return ["T", "A"];
     }

  });
}
pairElement("GCG");