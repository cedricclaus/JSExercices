'use strict'


function count(i){
    setTimeout(function(){console.log(i)},i*1000);

}

for(var i = 1; i<= 10 ;i++){
    count(i);
}