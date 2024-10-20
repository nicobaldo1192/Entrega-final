let Container = document.getElementById("products-container"); 
let productos = [];
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || []; 

fetch("./db/data.json")
.then(response => response.json())
.then(data => {
    productos = data;
    renderProductos(data);
});
function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div");
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <h4>$${producto.precio.toFixed(2)}</h4>
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                        <button class="productoAgregar" id="${producto.id}">Agregar</button>`;
        Container.appendChild(card);
    });
    addToCartButton();
}
function addToCartButton() {
    const addButton = document.querySelectorAll(".productoAgregar");
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id; 
            const selectedProduct = productos.find(producto => producto.id == productId);
            addToCart(selectedProduct);
            Swal.fire({
                icon: 'success',
                title: 'Producto Agregado',
                text: `${selectedProduct.nombre} ha sido agregado al carrito.`,
                confirmButtonText: 'Aceptar'
            });
        };
    });
}
function addToCart(product) {
    const existingProduct = cartProducts.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        product.cantidad = 1;
        cartProducts.push(product);
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}
Swal.fire({
    icon: "error",
    title: "Dejaste una compra sin terinar",
    text: "Queres seguir con una nueva compra?",
    footer: '<span>Para seguir tu compra Hace click <a href="./carrito.html">acá</a>'
});