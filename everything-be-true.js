//Everything Be True

function truthCheck(collection, hey) {
  
  for(i=0;i<collection.length;i++){
    
    if(!collection[i][hey])  {
    return false;
    }

  }
  return true;
}