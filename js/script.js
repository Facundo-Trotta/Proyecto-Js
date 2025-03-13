const productos = [
    {
        id: 1,
        nombre:"Gorra ajustable Under",
        precio: 9500,
        imagen:"img/articulos/art1.jpeg",
        cantidad: 1
    },
    {
        id: 2,
        nombre:"Buzo Adidas de Argentina",
        precio: 28000,
        imagen:"img/articulos/art2.png",
        cantidad: 1
    },
    {
        id: 3,
        nombre:"Jogger Cargo para hombre",
        precio: 18000,
        imagen:"img/articulos/art3.webp",
        cantidad: 1
    },
    {
        id: 4,
        nombre:"Remera Basica Negra",
        precio: 9000,
        imagen:"img/articulos/art4.png",
        cantidad: 1
    },
    {
        id: 5,
        nombre:"Zapatillas Puma",
        precio: 48000,
        imagen:"img/articulos/art5.webp",
        cantidad: 1
    },
]

//carrito

let carrito = [];

let productCard = document.getElementById("productos")

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
        const cards = document.createElement("div")
        cards.className = "card"

        cards.innerHTML = ` <div class="productos-container" ID:"${producto.id}>
                            <img src="${producto.imagen}" alt="">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <button class="add-cart" id="${producto.id}">Agregar al carrito</button>
                            </div>`
        productCard.appendChild(cards)
    })
    agregarAlCarrito()
}
mostrarProductos(productos)
