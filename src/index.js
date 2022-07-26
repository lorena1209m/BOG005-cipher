import cipher from './cipher.js';

//let resultado = document.getElementById("resultado"); // input cuadro descodificación

document.getElementById("input_inicial").addEventListener("click", cifrar);

// Formula = (cipher.encode - 65 + clave) % 26 + 65

function cifrar () {
    let cifrador = document.getElementById("cifrador").value; // input cifrador
    let clave = parseInt(document.getElementById("clave").value); // número de posiciones
    document.getElementById("resultado").value = cipher.encode(clave,cifrador);// para mostrar el resultade cifrar en la casilla desifrar
    
}

document.getElementById("input_final").addEventListener("click", descifrar);

function descifrar(){
    const resultado = document.getElementById("resultado").value; // input cuadro descodificación
    const clave = parseInt(document.getElementById("clave").value); // número de posiciones
    document.getElementById("cifrador").value = cipher.decode(clave,resultado); // para mostrar el descifrado

}

