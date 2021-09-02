/*
Parameters are value we haven't assigned yet.
Value is passed through to the function using an arguement(s).

ex:
    function nameFunc(parameter){
        return....
    }

    nameFunc(argument);
*/

//Parameter naming should reflect the desired data
function myName(name){
    console.log (`My name is ${name}`);
}

myName("Austin");

function coffeePot(filter){
    console.log(`I brewed some ${filter}.`);
}

coffeePot('Dark roast');
coffeePot('Medium roast');
coffeePot('Light roast');
coffeePot('tea instead');

//Known as a Function Reference
let kettle = coffeePot;
//Undefined, until passed the arguement for coffeePot
kettle('Green tea');