/*
Scope is simply the hierarchy of variables within our code.
-Global Scope or parent scope
-Local scope or child scope
*/

let global = 'Earth';

function scopeExample(){
    let local = 'Indy';
    console.log(local);
    console.log(`${local} is but one of the many cities of ${global}.`);

}

scopeExample();
// Local variable cannot be accessed outside the function
// console.log(local); 