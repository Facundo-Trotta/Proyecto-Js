//saludo
alert ("hola y encantado de que vengas a nuestras a nuestras pagina");
function saludar (nombre) {
    console.log ("hola y bienvenido" + nombre);
    alert ("hola y bienvenido " + nombre);
}
function pedirNombre () {
    let nombre = prompt ("¿como te llamas?");
    saludar (nombre);
}
pedirNombre ();
//preguntas con ciclos 
alert ("Estamos en la duda de marca de ropa con la que trabajar primero, asi que lo dejaremos al publico.");
let respuesta ; 
do {
    let respuesta = prompt ("¿Te gusta la ropa ajustada? si o no ")
    if (respuesta === "si") {
        console.log ("Gracias por su contestacion");
        alert ("Gracias por su contestacion");
        break;
    }else if (respuesta === "no") {
        console.log ("Gracias por su contestacion");
        alert ("Gracias por su contestacion");
        break;
    }else {
        console.log ("Porfavor ayudenos con la encuesta con un si o no");
        alert ("Porfavor ayudenos con la encuesta con un si o no");
    }
} while (respuesta !== "si" && respuesta !== "no");

//un poco de arrays
let ropa = ["blanco","negro"]
let preguntaRopa = prompt ("¿que color de ropa te gusta mas? blanco o negro")
    if (preguntaRopa === ropa[0]) {
        console.log ("hermoso color de ropa");
        alert ("hermoso color de ropa");
    }else if (preguntaRopa === ropa[1]) {
        console.log ("hermoso color de ropa");
        alert ("hermoso color de ropa");
    }else { 
        console.log ("disculpe por las molestias y gracias por pasar");
        alert ("disculpe por las molestias y gracias por pasar");
    }

//pregunta simple 
const pregunta = prompt ("¿adidas o nike?")
if (pregunta === "adidas") {
    console.log ("Increible, trabajaremos para traer esa marcas primero");
    alert ("Increible, trabajaremos para traer esa marcas primero");
} else if (pregunta === "nike") {
    console.log ("Increible, trabajaremos para traer esa marcas primero");
    alert ("Increible, trabajaremos para traer esa marcas primero");
} else { 
    console.log ("disculpe por las molestias y gracias por pasar");
    alert ("disculpe por las molestias y gracias por pasar");
}






