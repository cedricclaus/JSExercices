
"use strict"

var fact = function _fact(n) {
    if(!_fact.cache[n]){
        console.log("Calcul n:" + n);
        _fact.cache[n] = n>0 ? n * _fact(n - 1):1;
    }
    return _fact.cache[n];
};

fact.cache = [];

console.log(fact(0));
console.log(fact(5));
console.log(fact(7));

