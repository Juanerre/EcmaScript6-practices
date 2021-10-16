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

let lorem = "una frase en el rimer renglon \n" + "otra frase en el 2 renglon"

//es6 con comilla francesa!!!

let lorem2 = `la frase del priemr renglon
la frase del 2 renglon`;


console.log(lorem);
console.log(lorem2);

// objetos
// desestructuracion


let person ={
    'name': 'Juan',
    'age': 55,
    'country': 'MX'
}
 console.log(person.name, person.age, person.country);

//es6

let { name, age, country } = person;
console.log(name, country);

//ARREGLOS
//objetos concatención

let team1 = ['Oscar', 'Julian', 'David'];
let team2 = ['Sandra', 'Isabella', 'Veronica'];

//es6

let equipo = [...team1, 'Roberto', ...team2, 'Juan'];

console.log(equipo);

// let es igual a var pero con scope local, var tiene scope global.
// let vs var: scope
// let es scope local
// var es scope global


const a = 'b';
a ="a" // esto ya no es permitido en let, en var si se puede.

// es6 lo deja constante y no deja cambiarlo despues se vuelve constante.

// PROPIEDAD OBJETOS MEJORADA

let name = 'juan';
let age = 55;
//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);

//ARROW FUNCTIONS (tipo flecha) 

const names = [
    { name: 'juan', age: 55 },
    { name: 'Isa', age: 18 }
]
let listOfNames = names.map(function(item){
    console.log(item.age, item.name);
})

//es6
// se tiene la asignacion => que asigna(ejecute) la funcion anonima que se invoca
let listOfNames2 = names.map(item => console.log(item.name));

// otra forma

const listOfNames3 = (name, age, country) => {...codigo a ejecutar};

//otra forma
const square = num => num * num;
// sin return, sin bloques de llaves y es mas rapido

//PROMESAS 
//(asincronismo) 2 eventos no suceden al tiempo, 

 const helloPromise = () => {
     return new Promise((resolve, reject)=>{
         if (true) {
         resolve('hey!');
        } 
        else{
         reject ('ups!');
        }
    });
 }
 //llamo la funcion

 helloPromise()
    .then(response => console.log(response)) //llama lo que pase si la promesa es true ejecuta el if 
    .catch(error => console.log(error)); //llama lo que pase si la premesa es no true(false) ejecurta el else

//CLASES MODULOS Y GENERADORES
//OBJETOS
// asignamos un constructor y las variables
class calculator { 
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,3));

//MODULOS
// Se crea un modulo/archivo js en otra ubicacion, se exporta y se puede imprtar al archivo principal y siempre esta disponible:
//sintaxis en el modulo: 
const hello = () => { 
    return 'hello!!'
}
export default hello;
//ahora en el bloque principal se importa:
import {hello} from './rutaDelModulo';
// ya la puedo llamar:
hello();

//GENERATORS funcion especioal para genrar resultados

function* helloWorld(){
    if(true){
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// ECMAScript 7 (junio 2016)

//metodo "includes" para buscar un elemeto dentro de un objeto

let numbers = [1,2,3,7,8];
if (numbers.includes(70)) {
    console.log('si se encuentra un 7');
} 
else {
    console.log('no se encuentra');
}

//elevar a una potencia

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);

// ECMAScript 8 (junio 2017)

    Object.entries // devolver clave de una matriz

    const data ={
        frontend: 'oscar',
        backend: 'Isabel',
        design: 'Ana',
    }
    const entries = Object.entries(data);
    console.log(entries); // retorna una matriz array
    console.log(entries.length); // retorna la longitud del arreglo generado.

    Object.values //los valores de un objeto a un arreglo
    data = {
        frontend: 'oscar',
        backend: 'Isabel',
        design: 'Ana',
    }

    const values = Object.values(data);
    console.log(values); // solo con los valores forma un array.
    console.log(values,length); // cuantos elementos en el nuevo arreglo

    //padding elementos vacios en un extremo, inicial o final
    const string = 'hello';
    console.log(string.padStart(7, 'hi')); 
    //el numero es el max de caracteres(maxLength) 'cuales caracteres añadir al principio
    console.log(string.padEnd(12, ' ------'));
    //el numero es el max de caracteres(maxLength) 'cuales caracteres añadir al final

    // se pueden poner , al final dentro de los arreglos y ayuda a ver Bien


    //ASYNC Y AWAIT

    //HACER PRMESAS E INVOCARLAS
    //antes
        const helloWorld = () => {
            return new Promise((resolve, reject) => {
                (true)
                ? setTimeout(() => resolve('Hello World'), 3000) // se ejecuta si true
                : reject(new Error('Test Error')) // se ejecuta si false.
            })
        };
    // en es8
    //llamamos a la funcion declarada arriba helloWorld que si es true espera 3 segundos e imprime 'Hello World' se asigna a la const hello.
        const helloAsync = async () => {
            const hello = await helloWorld();
            console.log(hello);
        }
        helloAsync();

        const anotherFunction = async () => {
            try{
                const hello = await helloWorld();
                console.log(hello);
            }
            catch (error) {
                console.log(error);
            }
        };
        anotherFunction(); // se llama la funcion y la de arriba.

//ECMAScript 9 (junio 2018)

    // operador de reposo extraer porpiedades de objetos no cosntruidos

        const obj = {
            name: 'juan',
            age: 55,
            country: "PA",
        };

        let {name, ...all} = obj;
        console.log(name, all); //extraigo, quito nombre y dejo lo demas.
        let {country, ...all} = obj; //sacamos conuntry
        console.log(all); //muestra el resto menos country que se saco en el renglon de arriba.

    // unir objetos a otro objeto
        const obj = {
            name: 'juan',
            age: 55,
        }
        const obj1 = {
            ...obj,      //anidar los elementos obj y obj1
            country:'PA',
        }
        console.log(obj1);

    // promise.finally para saber cunado termina la promesa.
        const helloWorld = () =>{
            return new Promise((resolve, reject) =>{
                (true)
                ? setTimeout(()=> resolve('hello World'),3000)
                : reject(new Error('test Error'))
            });
        };
        helloWorld()
         .then(response => console.log(response))
         .catch(error => console.log(error))
         .finally (() => console.log('finalizo')) // esto en Es8

        //MUY IMPORTANTE regex
        // agrupar bloques de regex 

        const regexData  = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
        const match = regexData.exec('2018-04-20');
        const year = match[1]
        const month = match[2]
        const day = match[3]
        console.log(year,month,day);

//ECMAScript 10
    let array = [1,2,3, [1,2,3, [1,2,3]]];
    //devolver submatriz aplanada
    console.log(array.flat(2));
    //flat map, mapear, pasarle funcion y aplanarlo

    let array = [1,2,3,4,5];
    console.log(array.flatMap(value=>[value, value*2.5])); 
    // toma los valores y les hace operacion definida en la funcion.

    //eliminar espacios en blanco
    console.log(hello.trimStart()); 
    //elimina espacios blanco al inicio
    console.log(hello.trimEnd());
    //elimina espacios al final
    // optional catch error 
    catch {
        error
    }
    //cambier Clave: valor a eventos
    let entries = [['name', 'oscar'],['age', 32]];
    console.log(Object.fromEntries(entries));//MUY IMPORTANTE convierte arreglo en objeto o vieceversa

    //MYSIMBOL objeto tipo simbolo
    let mySimbol = 'my symbol';
    let symbol = Symbol(mySimbol);
    console.log(symbol.description); // entra a la descripcion de los objetos Symbol

// ECMAScript 2020 ES11
    //se pueden importar en cualquier parte otros archivos de javascript.
    <script type='module' src="ruta archivo js">funcion</script> // esto en html
    
    //en el archivo principal de js 
    import("la ruta del archivo js")
    module.hello() //hello es la funcion en el otro archivo.
    // nnumeros enteros grandes mayores a 2^53

    const bignumber = 293746582375620957294562983756283n;
    const anotherbig = BigInt(293746582375620957294562983756283); //usa el Bigint.

    const promise = new Promise((resolve, reject) => reject("reject"));
    const promise1 = new Promise((resolve, reject) => resolve("resolve1"));
    const promise2 = new Promise((resolve, reject) => resolve("resolve2"));

    Promise.allSettled([promise, promise1, promise2])
    .then(response => console.log(response));
    
    //MUY IMORTANTE
    //ahora los this son globales 
    console.log(globalThis); // se puede acceder a global incluyendo node.
    
    //operadores de Nulo:
    const fuuu = null ?? 'default string';
    console.log(fuuu);

    // optiaonal shanining

    const user ={};

    console.log(user?.profile?.email); // devuelve undefined sin dañar la aplicacion sn generar el error y detener la ejecucion.
    if(user?.profile?.email){
        console.log('email');
        }
        else {
            console.log('fail');
        }

//ECMAScript 12 (junio 2021)
//metodos nuevos
//operadors de asignacion logica
    const string = "javaScript es maravilloso, con javaScript puedo hacer de todo";
    
    const replacedString2 = string.replaceAll('javaScript', "Python");
    console.log(replacedString2); //reemplaza todo los buscados

    //se pueden crear clases provadas es decir solo apra ese bloque(instancia codigo

    class Message {
        show(val) {
            console.log(val);
        };
    }

    const message = new Message();
    message.show('Hola');
    //para volverla interna o local:
    //se pone #Show
    class Message {
        #show(val) {
            console.log(val);
        };
    }

    const message = new Message();
    message.show('Hola');

 //array de prmesas capturando la prieera QUE SE CUMPLA

 const promise1 = new Promise((resolve, reject) => reject('1'));
 const promise2 = new Promise((resolve, reject) => resolve('2'));
 const promise3 = new Promise((resolve, reject) => resolve('3'));

 Promise.any([promise1, promise2, promise3])
   .then(response => console.log(response)); //devuelve el primer cumplido o resolve es decir 2

 //referencia de fomra debil a un objeto
    class anyClass {
        constructor(element){
            this.ref =new WeakRef(element)
        };
    } // evitar que el eliminador de basura lo recoja

// expresiones y operadores nuevos
//and logico

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

//or logico
let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

//anulacion logica
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);

// proximas versionss el comite TC39 

//idea => propuesta => borrador => candidato => listo


