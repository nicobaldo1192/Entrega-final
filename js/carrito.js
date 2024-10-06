let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
let cartContainer = document.getElementById("cart-section");

function renderCarrito() {
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(producto => {
        total += producto.precio;
        const card = document.createElement("div");
        card.classList.add('cart-item');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h4>$${producto.precio.toFixed(2)}</h4>
            <button onclick="removeFromCart(${producto.id})">Eliminar</button>`;
        cartContainer.appendChild(card);
    });

    document.getElementById('total').innerText = total.toFixed(2);
    
    const checkoutButton = document.createElement("button");
    checkoutButton.innerText = "Comprar";
    checkoutButton.onclick = function() {
        window.location.href = "./contactos.html";
    };
    cartContainer.appendChild(checkoutButton);
}
function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    saveCart();
    renderCarrito();
}
function saveCart() {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
}
renderCarrito();

