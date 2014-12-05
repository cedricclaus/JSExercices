/**
 * Created by ccc on 1/12/2014.
 */

'use strict'


function counterFactory(init)  {

    var count = init;

    return {
        get :function(){
            return count;
        } ,
        inc : function(i){
            count+=i? i:1;
        }

    };

};

var counter1 = counterFactory(0);
var counter2= counterFactory(5);

console.log(counter1.get());
console.log(counter2.get());

counter1.inc(10);
counter2.inc(20);


console.log(counter1.get());
console.log(counter2.get());


