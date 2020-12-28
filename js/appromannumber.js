

var app = angular.module('myApp', []);

//Custom Filter Implementation
app.filter("converted", function() {
    "use strict";
    return function (inputNum) {
        
        var numArray = [100, 90, 50, 40, 10, 9, 5, 4, 1], //Arrays of Decimal, Roman.
            romArray = ["C", "XC", "L", "XL", "X","IX","V","IV","I"],
            converted = "", //Result variable
            i; //Index
        
        
        for(i = 0; i<=numArray.length; i += 1) { //For loop
            
            while (inputNum%numArray[i] < inputNum){ //While inputNum modulus index of numArray is less than the inputNum
                converted += romArray[i]; //Goes inside, adds a roman number to converted.
                inputNum -= numArray[i]; //InputNum -= index of numArray 
            } 
            
        }
    
    return converted;
    };
});

