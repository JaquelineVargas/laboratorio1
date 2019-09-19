function addTwoDigits(n){
    var a = n%10;
    var b = parseInt(n/10);
    var suma = a+b;

  return suma;
}

console.log("la suma de sus digitos es: " + addTwoDigits(29));
module.exports = addTwoDigits
