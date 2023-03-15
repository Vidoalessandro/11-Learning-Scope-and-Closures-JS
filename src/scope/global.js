// Variables

var a; // declaring 
var b = 'b'; // declaring / assign
b = 'bb'; // reassign
var a = 'aa'; // redeclaring


// Global Scope

var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Venezuela'; // global
    console.log(country);
}

countries();
console.log(country);