/**
 * Created by ccc on 1/12/2014.
 */

'use strict'


function Counter(init)  {

    this.count = init;

};

Counter.prototype.get = function(){
    return this.count;
}

Counter.prototype.inc = function(i){
    this.count+=i? i:1;
}

var counter1 = new Counter(0);
var counter2 = new Counter(5);


console.log(counter1.get());
console.log(counter2.get());

counter1.inc(10);
counter2.inc(20);


console.log(counter1.get());
console.log(counter2.get());


