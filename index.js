function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2 (name = 'oscar', age = 32, country ='MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('roberto', 55, 'CO');

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea 

let lorem = 'una frase en el rimer renglon \n' + 'otra frase en el 2 renglon'

//es6

let lorem2 = `la frase del priemr renglon
la frase del 2 renglon`;

console.log(lorem);
console.log(lorem2);

// objetos

let person ={
    'name': 'Juan',
    'age': 55,
    'country': 'MX'
}
 console.log(person.name, person.age, person.country);

//es6

let { name, age, country } = person;
console.log(name, age);

//objetos concatención

let team1 = ['Oscar', 'Julian', 'David'];
let team2 = ['Sandra', 'Isabella', 'Veronica'];

//es6

let equipo = [...team1, 'Roberto', ...team2, 'Juan'];

console.log(equipo);

// let es igual a var pero con scope local.
// var tiene scope global