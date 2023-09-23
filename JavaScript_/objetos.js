// Objetos .json
// Poseen una clave que corresponde a un valor. Son los objetos que actúan en internet.

let persona = {

nombre: "Sebastian",
id: 1234,
apellido: "Alarcon",
esProfesor: true,
estudiantes: [{

 id: 1, 
    nombre: "Fabian"

},
{
    id: 2,
    nombre: "Juan David"
}
]
}

//JSON Javascript Object Notation - yeison

console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(persona.apellido);
console.log(JSON.stringify(persona));   //Se puede convertir un String a JSON y vice versa
