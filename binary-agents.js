//Binary Agents

function binaryAgent(str) {
   return str.replace(/[0-9]\w+\s|[0-9]\w+\S/g, function(words){
    return String.fromCharCode(parseInt(words, 2));    
  });
}