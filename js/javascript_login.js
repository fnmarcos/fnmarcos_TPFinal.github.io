var edad_prompt = prompt("Ingrese su edad a continuacion:");
edad_int = parseInt(edad_prompt);
verificacion_edad(edad_int);


function verificacion_edad(edad) {

    if (edad >= 18) {
        alert("Ustes es mayor de edad, bienvenido a la pagina");
        window.location = "./index.html";
    } else if (edad < 18) {
        alert("Ustes no es mayor de edad, entra bajo su responsabilidad");
        window.location = "./index.html";

    } else {
        alert(" No ingresó su edad, por favor intente de nuevo");
        edad_prompt = prompt("Ingrese su edad a continuacion:");
        edad_int = parseInt(edad_prompt);
        verificacion_edad(edad_int);
    }

}
