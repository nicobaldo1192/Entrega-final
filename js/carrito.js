let cart = JSON.parse(localStorage.getItem("cartProducts")) || []; 
let cartContainer = document.getElementById("cart-section");

function renderCarrito() {
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(producto => {
        total += producto.precio * producto.cantidad;
        const card = document.createElement("div");
        card.classList.add('cart-item');
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <h4>$${producto.precio.toFixed(2)} x ${producto.cantidad}</h4>
            <button onclick="updateQuantity(${producto.id}, -1)">-</button>
            <button onclick="updateQuantity(${producto.id}, 1)">+</button>
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

    const clearCartButton = document.createElement("button");
    clearCartButton.innerText = "Vaciar Carrito";
    clearCartButton.onclick = function() {
        cart = [];
        saveCart();
        renderCarrito();
    };
    cartContainer.appendChild(clearCartButton);
}
function addToCart(producto) {
    const existingProduct = cart.find(p => p.id === producto.id);
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        producto.cantidad = 1;
        cart.push(producto);
    }
    saveCart();
    renderCarrito();
}
function updateQuantity(productId, change) {
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.cantidad += change;
        if (product.cantidad <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCarrito();
        }
    }
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