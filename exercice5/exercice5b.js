/**
 * Created by ccc on 1/12/2014.
 */
'use strict'

var object = {

    withoutThis : function(){
        console.log("without this");
    },
    withThis : function(){
        console.log(this.message);
    },
    message : "with this"


};

setTimeout(object.withoutThis,2000);
setTimeout(object.withThis,2000);
setTimeout(function(){object.withThis()},2000);

console.log(object.withoutThis.prototype)