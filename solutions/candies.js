function candies(n,m){
    var a = parseInt(m/n);
    var b = a*n;

    return b;
}
console.log("se repartieron " + candies(3,10) + " dulces");
module.exports = candies
