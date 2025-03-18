// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById ("amigo")
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Este nombre ya ha sido agregado.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const indice = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").textContent = "El amigo secreto es: " + amigos[indice];
    } else {
        document.getElementById("resultado").textContent = "Agrega nombres antes de sortear.";
    }
}
