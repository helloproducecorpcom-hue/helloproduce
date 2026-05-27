// Usuarios simples
const usuarios = { "cynthia": "123", "admin": "admin" };

// Tus productos (esto puedes conectarlo luego a tu Excel)
const productos = [
    { nombre: "Aguacate", precio: 5 },
    { nombre: "Tomate", precio: 2 }
];

function login() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    
    if (usuarios[u] === p) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        if (u === "admin") document.getElementById('admin-section').classList.remove('hidden');
        cargarCatalogo();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function cargarCatalogo() {
    const lista = document.getElementById('lista-productos');
    productos.forEach(p => {
        lista.innerHTML += `<div class="producto">${p.nombre} - $${p.precio} <input type="number" class="cant" data-nombre="${p.nombre}"></div>`;
    });
}

function enviarPedido() {
    alert("Pedido enviado a administración");
}