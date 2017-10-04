//Sum All Primes

function sumPrimes(num) {

  var a = 0;
  var b = 0;

  for(var i = 2; i <= num; i++){
    for(var j = 1; j <= i; j++){

      if(i % j === 0){
        a++;
      } 
    }  

    if(a === 2){
      b += i;
    }
    a = 0;
  }
  return b;
}

sumPrimes(5);