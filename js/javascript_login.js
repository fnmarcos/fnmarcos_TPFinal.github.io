var var_edad = prompt("Ingrese su edad a continuacion:");
var_edad = parseInt(var_edad);

while (Number.isInteger(var_edad) == false) {
    alert(" No ingresó su edad, por favor intente de nuevo");
    var_edad = prompt("Ingrese su edad a continuacion:");
    var_edad = parseInt(var_edad);
}

verificacion_edad(var_edad);

estudiante();

// Funciones ------------------------------------------------------------------

function verificacion_edad(edad) {

    if (edad >= 18) {
        alert("Usted es mayor de edad");
    } else {
        alert("Usted no es mayor de edad, entra bajo su responsabilidad");
    }
}

function estudiante() {

    let nombre = prompt("Ingrese su nombre a continuacion:")
    let confirmacion = confirm("¿Es estudiante universitario?")

    if (confirmacion == true) {
        alert(nombre + ", usted posee un 20% de descuento en todos nuestros cursos y capacitaciones.");
        window.location = "./index.html";
    } else {
        alert(nombre + ", le informamos que contamos con cursos y capacitaciones a excelentes precios.");
        window.location = "./index.html";
    }
}