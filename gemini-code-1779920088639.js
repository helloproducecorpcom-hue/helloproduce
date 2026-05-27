const cuentas = {
    "admin": { pass: "admin123", rol: "admin" },
    "chef": { pass: "cocina123", rol: "chef" }
};
const productos = [{n:"Aguacate", p:5}, {n:"Tomate", p:2}];
let pedidos = [];

function intentarIngreso(rolEsperado) {
    let u = document.getElementById('user').value.toLowerCase();
    let p = document.getElementById('pass').value;
    if (cuentas[u] && cuentas[u].pass === p && cuentas[u].rol === rolEsperado) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        document.getElementById('role-title').innerText = "Panel: " + rolEsperado.toUpperCase();
        if (rolEsperado === 'admin') document.getElementById('admin-panel').classList.remove('hidden');
        cargarCatalogo();
    } else { alert("Usuario o contraseña incorrectos"); }
}

function cargarCatalogo() {
    let div = document.getElementById('lista-productos');
    div.innerHTML = "";
    productos.forEach(pr => {
        div.innerHTML += `<p>${pr.n}: <input type="number" class="qty" data-name="${pr.n}" value="0" style="width:50px"></p>`;
    });
}

function procesarOrden() {
    let pedido = {};
    document.querySelectorAll('.qty').forEach(i => { if(i.value > 0) pedido[i.dataset.name] = i.value; });
    pedidos.push(pedido);
    alert("¡Pre-factura generada!");
}

function verConsolidado() { alert("Resumen: " + JSON.stringify(pedidos)); }
