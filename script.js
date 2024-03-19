//alert("Hola este es mi Javascript");
//let nombre;
//nombre="CarlosEML";


let contenidoTitulo = "Carlos";
//Obtener el titulo del html
let titulo = document.querySelector("#encabezado h1");
//console.log("querySelector()",titulo)
titulo.innerHTML = contenidoTitulo;

//Condicionales
let textoTitulo = titulo.innerText;
console.log(titulo.innerText);

if(textoTitulo=="Carlos1"){
    titulo.innerHTML="Otro";
} else{
    console.log("no se cumple");
}

//FUNCIONES
//let nombre ="Ani";
let ciudad ="Lima";
let gusto ="Play";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre,ciudad,gusto){
    let contenido=`Me llamo ${nombre}, naci en ${ciudad} y me gusta ${gusto}.`;
    return contenido;
}

parrafo.innerText =cambiarTexto(nombre,ciudad,gusto);

//ACTIVAR EL MENU DESPLEGABLE
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
};

//FUNCIONES DEL FORMULARIO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});