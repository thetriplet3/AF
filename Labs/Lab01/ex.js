
//Q1
//Create a function as a variable (function expression) that prints ‘Hello World’ to console
//and another function which accepts a variable. The argument passed to the second
//function should be executed as a function inside the body. Call the second function
//passing the first function as the argument. Check the output.
var helloFunc = function() {
    console.log("Hello World!")
}
function execFunc(someFunction) {
    someFunction();
}

execFunc(helloFunc);


//Q2
//Use curly brackets to create JSON like JavaScript object and add properties and functions
//to the object
var property1 = "SLIIT";
var property2 = "AF"
var function1 = function(p1) {
    console.log("Hello " + p1);
    return "exiting function1";
};

var jsObj = {
    p1: property1,
    p2: property2,
    f1: function(p1) {
        return function1(p1) 
    }
}
console.log(jsObj.p1);
console.log(jsObj.p2);
console.log(jsObj.f1(jsObj.p1));


//Q3
/*
    Understand the ‘this’ keyword in JavaScript.
    ● Declare a global variable named vehicleName in the window object
    ● Declare a method named printVehicleName to print out the vehicle name
    ● Declare an object named Vehicle(using object literal notation) which have a
    variable called vehicleName and declare a function named getVehicleName and
    assign it with the printVehicleName
    ● Execute the printVehicleName function and the getVehicleName functions to see
    the results
    ● Correct the getVehicleName to print out the global variable vehicleName using
    the this keyword
*/
var vehicleName = "Nissan GTR";

function printVehicleName() {
    console.log(this.vehicleName);
}

var Vehicle = {
    vehicleName,
    getVehicleName : function() {
        printVehicleName();
    }
};
Vehicle.getVehicleName();

//Q4
/*
Create a separate function using JavaScript closure which accepts the tax percentage and
returns a function which accepts the amount and returns the amount after adding tax
percentage. Try adding tax percentage to ‘this’ object and check if it works.
*/

function taxPercentage(taxPerc) {
    this.percentage = taxPerc;
    var calcAmount = function(amount) {
        return amount * percentage;
    };
}

//Q5
/*
Write a function to call GitHub API (https://api.github.com/users) and get users and
return the users to the caller.
*/
function getGitHubUsers() {
    var url = "https://api.github.com/users/thetriplet3";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
    };
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}