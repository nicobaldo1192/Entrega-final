const productos= [
    {
        id: 1, 
        nombre: "Nintendo Switch Oled", 
        precio: 790000,
        imagen: "./img/nintendo_switch.jpg",
    },
    {
        id: 2, 
        nombre: "playstation 5", 
        precio: 1150000,
        imagen: "./img/playstation_5.jpg",
    },
    {
        id: 3, 
        nombre: "Xbox series x", 
        precio: 1150000,
        imagen: "./img/xbox_Series_x.jpg",
    },
    {
        id: 4, 
        nombre: " playstation 4", 
        precio: 750000,
        imagen: "./img/Playstation_4.jpg",
    },
    {
        id: 5, 
        nombre: "Xbox Series S", 
        precio: 900000,
        imagen: "./img/xbox_series_s.jpg",
    },
]

let cartProducts = [] 

let productsContainer = document.getElementById("products-container")

function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <h4>${producto.precio}</h4>
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                        <button class="productoAgregar" id="${producto.id}">Agregar</button>`
        productsContainer.appendChild(card)
    })
    addToCartButton()
}
renderProductos(productos)

function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id 
            const selectedProduct = productos.find(producto => producto.id == productId)
            cartProducts.push(selectedProduct)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}

Swal.fire({
    icon: "error",
    title: "Dejaste una compra sin terinar",
    text: "Queres seguir con una nueva compra?",
    footer: '<span>Para seguir tu compra Hace click <a href="./carrito.html">acá</a>'
});