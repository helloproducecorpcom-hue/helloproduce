let usuarios = { "cynthia": "123", "valentina": "456" };
const productos = [
    { nombre: "Aguacate", precio: 5 },
    { nombre: "Tomate", precio: 2 },
    { nombre: "Cebolla", precio: 1.8 }
];
let pedidosRegistrados = [];

function login() {
    const u = document.getElementById('user').value.toLowerCase();
    const p = document.getElementById('pass').value;
    if (usuarios[u] === p) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        if (u === "cynthia" || u === "valentina") {
            document.getElementById('admin-section').classList.remove('hidden');
        }
        cargarCatalogo();
    } else { alert("Usuario o contraseña incorrectos"); }
}

function cargarCatalogo() {
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = ""; 
    productos.forEach(p => {
        lista.innerHTML += `
            <div class="producto">
                <span>${p.nombre} - $${p.precio}</span>
                <input type="number" class="cant" data-nombre="${p.nombre}" value="0" min="0">
            </div>`;
    });
}

function enviarPedido() {
    let pedidoActual = {};
    let hayPedido = false;
    document.querySelectorAll('.cant').forEach(input => {
        let nombre = input.getAttribute('data-nombre');
        let cantidad = parseInt(input.value);
        if (cantidad > 0) { pedidoActual[nombre] = cantidad; hayPedido = true; }
    });
    if (hayPedido) {
        pedidosRegistrados.push(pedidoActual);
        alert("¡Pedido registrado!");
        document.querySelectorAll('.cant').forEach(input => input.value = 0);
    } else { alert("Añade al menos un producto."); }
}

function verConsolidado() {
    let totalConsolidado = {};
    pedidosRegistrados.forEach(pedido => {
        for (let producto in pedido) {
            totalConsolidado[producto] = (totalConsolidado[producto] || 0) + pedido[producto];
        }
    });
    let mensaje = "TOTAL PARA DESPACHO:\n";
    let vacio = true;
    for (let prod in totalConsolidado) { mensaje += `${prod}: ${totalConsolidado[prod]}\n`; vacio = false; }
    alert(vacio ? "No hay pedidos aún." : mensaje);
}

function agregarUsuario() {
    let nuevoU = prompt("Nombre del nuevo cliente:");
    let nuevoP = prompt("Contraseña:");
    if (nuevoU && nuevoP) {
        usuarios[nuevoU.toLowerCase()] = nuevoP;
        alert("Cliente " + nuevoU + " agregado correctamente.");
    }
}
