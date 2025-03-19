// la lista de los productos
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

// Creando la funcion de para mostrar los productos
let carrito =[]
let productCard = document.getElementById("productos")

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
        const cards = document.createElement("div")
        cards.className = "card"

        cards.innerHTML = ` <div class="productos-container" ID:"${producto.id}">
                            <img src="${producto.imagen}" alt="">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <button class="add-cart" id="${producto.id}">Agregar al carrito</button>
                            </div>`
        productCard.appendChild(cards);
    })
    agregarAlCarrito();
};
mostrarProductos(productos);

// paso los productos seleccionados al carrito
function agregarAlCarrito() {
    const botones = document.querySelectorAll(".add-cart")
    botones.forEach(boton => {
        boton.onclick = (e) => {
            const productoId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productoId);
            carrito.push(selectedProduct);
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}

let carritoCompra = document.getElementById("carrito-content")

let carritoCargado = localStorage.getItem("carrito")
carritoCargado = JSON.parse(carritoCargado)

function mostrarCarrito (itemCarrito) {
    itemCarrito.forEach(function (producto) {
            const cardCompra = document.createElement("div")

            cardCompra.innerHTML = `<div class="carrito-content" ID:"${producto.id}>
                                <img src="${producto.imagen}" alt="">
                                <h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="eliminar-item" id="${producto.id}">Eliminar</button>
                                </div>`
            carritoCompra.appendChild(cardCompra)
        })
}
mostrarCarrito(carritoCargado);


// eliminar item del carrito

const eliminarItem = document.querySelectorAll(".eliminar-item")
eliminarItem.forEach(boton => {
    boton.onclick = (e) => {
        const itemId = e.currentTarget.id
        carritoCargado = carritoCargado.filter(item => item.id != itemId)
        localStorage.setItem("carrito", JSON.stringify(carritoCargado))
        location.reload()
    }
})

// total del carrito

const totalCompra = carritoCargado.reduce((acc, item) => acc + item.precio, 0)
const mostrarTotal = document.createElement("div")
mostrarTotal.innerHTML = `<h3>Total: $${totalCompra}</h3>
                          <button class="finalizar-compra">comprar</button>`
carritoCompra.appendChild(mostrarTotal)

//finalizar compra
//     const finalizarCompra = document.querySelectorAll(".finalizar-compra")
//     finalizarCompra.forEach(boton => {
//     boton.onclick = (e) => {
    
//     }
// })