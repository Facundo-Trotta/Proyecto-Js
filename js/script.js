//saludo
const pedirNombre = prompt ("Ingrese su nombre") ;
const saludar = ("hola "+ pedirNombre);

alert (saludar);
console.log (saludar);

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



//pregunta simple 
let pregunta = prompt ("¿adidas o nike?")
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






