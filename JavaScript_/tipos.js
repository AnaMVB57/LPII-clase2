//  Tipos de dato primitivos de JS

// Number (Integers and Floats) 10 10.5 2000

let numero = 10;
let numeroDePuertas = 4;
let numerPi = 3.14;
let valorMatricula = 2_000_000; //  Forma de separar los miles/millones
let numeroObjeto = new Number(10.25);       //Es posible, pero no es necesario

// String   (Cadenas de caracteres) "" o ''

let saludo = "Hola";
let despido = 'Chao';
let stringComoObjeto = new String("Hola");       //Es posible, pero no es necesario


// Boolean  (true or false)

let esCierto = false;
let esFeo = true;
let booleanComoObjeto = new Boolean("Hola");       //Es posible, pero no es necesario

// Object  -> {} -> new Object()

let persona= {
    nombre: "Ana",
    apellido: "Villanueva"
};
let empleado= {
    id: 1,
    nombre: "Guayaba"
};

// Array   ->  []

let arregloObjetos = [persona, empleado];

// BigInt   (valores numéricos MUY grandes) 100n new BigInt()

let numeroGrande= 100n;
let numeroGrandeComoObjeto = new BigInt(100);

// undefined (valor por defecto que tienen las variables si no son asignadas)

let variableUndefined;
let variableUndefined2 = undefined;

// null   ->   (se asigna cuando quiero especificar que una variable está vacía)

let variableNula = null;

// Symbol -> (se utiliza para crear valores únicos)

let carita = new Symbol("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧	");

