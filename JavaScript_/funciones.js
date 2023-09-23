//Funciones

function sumar(numeroUno, numeroDos){   //Normalmente los nombres de las funciones deben empezar por un verbo en infinitivo

    return numeroUno + numeroDos;

};

let sumarVersionDos = function (numeroUno, numeroDos){   //Normalmente los nombres de las funciones deben empezar por un verbo en infinitivo

    return numeroUno + numeroDos;
};  //  a través de una función anónima (no tiene nombre, sólo cuerpo. El nombre se lo da la variable)

let sumarVersionTres = (numeroUno, numeroDos) =>{

    console.log("Soy el arrow function ");
    return numeroUno + numeroDos;
};  // Arrow function / también es función anónima

let funcionUno = function (numeroUno, numeroDos, funcionDos){
    console.log("Estoy dentro de la función Uno");
    return funcionDos(numeroUno, numeroDos);
}; // Recibe una función como parámetro de entrada

let funcionTres = (numeroUno, numeroDos) => {
    console.log("Voy a restar");
    return numeroUno - numeroDos;
};

/*console.log(sumar(5,8));
console.log(sumar("Hola"," mundo"));
console.log(sumarVersionDos(10, 20));*/
console.log(funcionUno(10, 40, sumarVersionTres));
console.log(funcionUno(20,5, funcionTres));