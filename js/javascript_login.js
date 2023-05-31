var var_edad = prompt("Ingrese su edad a continuacion:");
var_edad = parseInt(var_edad);

while (Number.isInteger(var_edad) == false) {
    alert(" No ingresó su edad, por favor intente de nuevo");
    var_edad = prompt("Ingrese su edad a continuacion:");
    var_edad = parseInt(var_edad);
}

verificacion_edad(var_edad);

var cod_postal = prompt("Ingrese el codigo postal de residencia:");
cod_postal = parseInt(cod_postal);

ubicacion(cod_postal)

// Funciones ------------------------------------------------------------------

function verificacion_edad(edad) {

    if (edad >= 18) {
        alert("Usted es mayor de edad");
    } else {
        alert("Usted no es mayor de edad, entra bajo su responsabilidad");
    }
}

function ubicacion(codigo_postal) {

    if (codigo_postal == 2900) {
        alert("Usted se encuentra en San Nicolás. Usted posee un 20% de descuento en todos nuestros cursos y capacitaciones.");
        window.location = "./index.html";
    } else {
        alert("Usted se encuentra fuera de San Nicolás.");
        window.location = "./index.html";
    }
}