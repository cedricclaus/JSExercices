/**
 * Created by ccc on 1/12/2014.
 */

'use strict'


var module = (function(){

    var count = 0;

    return {
        get :function(){
            return count;
        } ,
        inc : function(i){
            count+=i? i:1;
        }

    };

}());

console.log(module.get());
module.inc(1);
console.log(module.get());
module.inc(4);
console.log(module.get());

