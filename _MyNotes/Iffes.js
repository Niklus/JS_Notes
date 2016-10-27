 /*IFFE: Immediately-invoked function expression*/

var num = 30;

(function () {
    var num = 25;
   console.log(num);
})();

console.log(num);