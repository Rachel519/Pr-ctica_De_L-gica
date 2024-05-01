/**
 * Perfil del usuario
Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */

function agregarNombre(){
    let nombre= prompt("Ingrese su nombre","Artemio Cruz");
    if (nombre != null){
        document.getElementById("nombres").innerHTML=
        "Hola "+ nombre + " bienvenida :)"

    }
}
console.log("Hola "+ nombre + " bienvenida :)")

function agregarEdad(){
    let edad=prompt("Ingrese su edad", "26");
    if (edad!= null){
    document.getElementById("edad").innerHTML=
    "Su edad es: "+ edad;
    }
}

function agregarPelicula(){
    let pelicula=prompt("Ingrese su pelicula favorita", "Orgullo y prejuicio");
    if(pelicula!= null){
        document.getElementById("peliculas").innerHTML=
        "La pelicula "+ pelicula + " es una de mis favoritas";
    }
}
