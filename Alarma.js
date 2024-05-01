
 /* Alarma
Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
Ejemplo de resultado : "Hora de acostarse después de 10 segundos".
 */

function determinarAlarma (){
    let segundos = prompt("Ingrese los segundos", "20")
    if (segundos!= null){
        let mensaje = "Hora de acostarse despues de "+ segundos+ "segundos";
        setTimeout(function(){//setTimeout nos sirve para determinar el tiempo que debe trascurrir para ejecutar lajunción en este caso una alerta.
            alert(mensaje);
        },segundos*1000); 

    }



















    /*let segundos = prompt("Ingrese la cantidad de segundos");
    let mensaje = prompt("Ingrese el mensaje");
    setTimeout(function(){
        alert(mensaje);
    },segundos*1000);*/

}
/**
 * function agregarNombre(){
    let nombre= prompt("Ingrese su nombre","Artemio Cruz");
    if (nombre != null){
        document.getElementById("nombres").innerHTML=
        "Hola "+ nombre + " bienvenida :)"

    }
}
 */