// "use strict";

// totalGlobalVariable = "NEVER EVER!!! do this!!!";
var globalVariable = "Also NEVER ever do this!!!";

// use const whenever possible, else use let

// about const:
// const cannot be undeclared or redeclared
// but its value can be changed as long as you don't change the assignment


function someOtherScope () {
    // function scope
}

{
    //block scope
    console.log("What is this?")
}

    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue); //false
     //var pollutes scope

     
    let someValue2 = true;
    {
        let someValue2 = false;
    }
    console.log(someValue2); //true


    for(var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i) // printer 6 6 6 6 6 6, fordi var bliver sat som global variable og forstyrrer scope
        }, 1000); 
    }

    //løsning på
    for(let i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000); 
    }