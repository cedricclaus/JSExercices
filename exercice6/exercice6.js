/**
 * Created by ccc on 1/12/2014.
 */
'use strict'

function Person(firstName,lastName){

    this.firstName = firstName;
    this.lastName = lastName;



}

Person.prototype.fullName= function(){
        return this.firstName + " " + this.lastName;
    }



var p1 = new Person("cedric","claus");
console.log(p1);

console.log(p1.fullName());