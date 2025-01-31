// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos);

// Caputa el valor del campo de entrada
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Valida la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }

    // Actualiza el array de 'amigos'
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = "";
}







