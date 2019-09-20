function addTwoDigits(n){

    var aux1 = n%10;
    var aux2 = parseInt(n/10);
    var suma = aux1+aux2;

  return suma;
}

console.log("la suma de sus digitos es: " + addTwoDigits(29));
//console.log(digitos(32));
//console.log(digitos(55));
module.exports = addTwoDigits
