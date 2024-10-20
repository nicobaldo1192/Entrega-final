document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    const resumenContainer = document.getElementById("resumen-container");
    let total = 0;
    resumenContainer.innerHTML += `<h2>Información del Usuario</h2>
                                    <p>Nombre: ${usuario.nombreApellido}</p>
                                    <p>Email: ${usuario.email}</p>
                                    <p>Edad: ${usuario.edad}</p>
                                    <h2>Productos Adquiridos</h2>`;
    cart.forEach(producto => {
        total += producto.precio * producto.cantidad;
        resumenContainer.innerHTML += `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            </div>`;
    });
    resumenContainer.innerHTML += `<h2>Total: $${total.toFixed(2)}</h2>`;
});
function volver() {
    window.location.href = "index.html";
}

