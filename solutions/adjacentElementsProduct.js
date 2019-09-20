function adjacentElementsProduct(inputarray){
  var limproduc=-99999999999;
    for(var i=1; i<inputarray.length; i++){
      if((inputarray[i]*inputarray[i-1]) > limproduc){
        limproduc=inputarray[i]*inputarray[i-1];
      }
    }


    return limproduc;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
//console.log(adjacentElementsProduct([4, 9, -3, 1, 0, 2]));
module.exports = adjacentElementsProduct
