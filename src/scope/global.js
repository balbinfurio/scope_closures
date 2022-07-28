// variables

var a; // declarar variable
var b = 'b'; // inicializar variable
b = 'bb'; // reinicializar
var a = 'aaa' // redeclarar

// Global scope

let fruit = 'apple'; // global

function bestFruit()
{
    console.log(fruit);
}

bestFruit();

function countries()
{
    var country = 'Colombia'; // Así se declara de forma GLOBAL scope
    console.log(country);
}

countries();
console.log(country);