/**
 * Created by ccc on 1/12/2014.
 */
"use strict"


var numbers = [1, 42, 17, 45, 2, 95];

numbers.maxFor = function () {
        var result = 0;
        for (var i = 0; i < this.length; i++) {
              if(this[i]> result){
                    result = this[i];
              }
           }
        return result;

    };

numbers.maxReduce = function(){
        return this.reduce(function(previousValue, currentValue, index, array){
           return currentValue>previousValue ? currentValue:previousValue;

        },0)
    };

numbers.maxReduce2 = function(){
    return this.reduce(function(max,item){
        return item>max ? item:max;

    },0)
};




console.log(numbers.maxFor());
console.log(numbers.maxReduce());
console.log(numbers.maxReduce2());
