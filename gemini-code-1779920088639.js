let usuarios = { "admin": "admin123", "chef": "cocina" };
const productos = [{n:"Aguacate", p:5}, {n:"Tomate", p:2}];
let pedidos = [];

function login() {
    let u = document.getElementById('user').value.toLowerCase();
    let p = document.getElementById('pass').value;
    
    if (usuarios[u] === p) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        document.getElementById('welcome-msg').innerText = "Bienvenido " + u;
        
        if (u === "admin") document.getElementById('admin-panel').style.display = 'block';
        cargarProductos();
    } else { alert("Acceso denegado"); }
}

function cargarProductos() {
    let div = document.getElementById('catalogo');
    productos.forEach(pr => {
        div.innerHTML += `<p>${pr.n}: <input type="number" class="qty" data-name="${pr.n}"></p>`;
    });
}

function procesar() {
    let pedido = {};
    document.querySelectorAll('.qty').forEach(i => {
        if(i.value > 0) pedido[i.dataset.name] = i.value;
    });
    pedidos.push(pedido);
    alert("¡Pre-factura generada!");
}

function verTotal() {
    alert("Total consolidado: " + JSON.stringify(pedidos));
}
