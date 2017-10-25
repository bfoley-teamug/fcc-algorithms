//Symmetric Difference

function sym() {
    var finalArr = [];
    for (var i = 0; i < arguments.length; i++) {
        finalArr.push(arguments[i]);
    }

    function diff(a, b) {
        var result = [];

        a.forEach(function(item) {
            if (b.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
        });

        b.forEach(function(item) {
            if (a.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item); 
            }
        });

        return result;
    }
 
    return finalArr.reduce(diff);
} 