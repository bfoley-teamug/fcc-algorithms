//Drop It

function dropElements(arr, func) {

while (func(arr[0]) === false){
 arr.shift();
}
return arr;

}