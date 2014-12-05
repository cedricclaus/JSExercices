/**
 * Created by ccc on 1/12/2014.
 */

'use strict'

var object1 = {};

object1.message =  "logMe2";

object1.console = function(){
    console.log("logMe");
}

object1.console2 = function(){
    console.log(this.message);
}

setTimeout(object1.console,2000);
setTimeout(object1.console,2000);
setTimeout(console,2000);
setTimeout(console2,2000);


