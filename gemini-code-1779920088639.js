// Edita esta lista cuando necesites cambiar productos
let productos = [
    { n: "Aguacate", p: 5 },
    { n: "Tomate", p: 2 },
    { n: "Cebolla", p: 1.8 }
];

const cuentas = {
    "admin": { pass: "admin123", rol: "admin" },
    "chef": { pass: "cocina123", rol: "chef" }
};
let pedidos = [];

function intentarIngreso(rol) {
    let u = document.getElementById('user').value.toLowerCase();
    let p = document.getElementById('pass').value;
    if (cuentas[u] && cuentas[u].pass === p && cuentas[u].rol === rol) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-screen').classList.remove('hidden');
        if (rol === 'admin') document.getElementById('admin-panel').classList.remove('hidden');
        cargarCatalogo();
    } else { alert("Datos incorrectos"); }
}

function cargarCatalogo() {
    let div = document.getElementById('lista-productos');
    div.innerHTML = "";
    productos.forEach(pr => {
        div.innerHTML += `
            <div class="producto-row">
                <span>${pr.n} ($${pr.p})</span>
                <input type="number" class="qty" data-name="${pr.n}" value="0">
            </div>`;
    });
}

function procesarOrden() {
    let pedido = {};
    document.querySelectorAll('.qty').forEach(i => {
        if(i.value > 0) pedido[i.dataset.name] = i.value;
    });
    pedidos.push(pedido);
    alert("¡Pre-factura generada con éxito!");
}

function verConsolidado() {
    alert("Consolidado: " + JSON.stringify(pedidos));
}
