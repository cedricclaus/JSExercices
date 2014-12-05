/**
 * Created by ccc on 1/12/2014.
 */

"use strict"

var person = {

    name : "CLAUS",
    surname : "Cedric",
    fullname : function(){
        return this.name + " " + this.surname;

    },
    fullname2 : fullNameOut(this)

}

function fullNameOut(personLocal){
    return personLocal.name  + " " + personLocal.surname;
}


console.log(person.fullname);
console.log(person.fullname());
person.name = "PasClaus";
console.log(person.fullname());
person['surname'] = "pasCedric";
console.log(person.fullname());
console.log(person.fullname2);


