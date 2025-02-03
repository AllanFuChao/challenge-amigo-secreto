// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// console.log(amigos);

// Caputa el valor del campo de entrada
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    // Valida la entrada, si no se ingresa nada, no seguira la funcion.
    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }

    // Actualiza el array de 'amigos'
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elemento a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        // Asigna el nombre como un <li>
        li.textContent = amigos[i];
        // Agrega el nombre asignado como <li> al <ul> respectivo
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Confirmar que haya un listado de amigos, si no hay, no seguira la funcion.
    if (amigos.length === 0) {
        alert("Agregue nombres a la lista de amigos.");
        return;
    }

    // codigo para que eliga aleatoriamente un amigo de la lista.
    let eleccionAleatoria = Math.floor(Math.random() * amigos.length);

    // Define el nombre del amigo.
    let amigoSorteado = amigos[eleccionAleatoria];

    // Muestra el resultado en el documento .html
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
    // console.log(amigoSorteado);
}







