/** Palíndromo
Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */

/*function agregarPalabra(){
    let palabra= prompt("Ingrese la palabra","ana");
    if (palabra != null){
        let palabraInvertida = palabra.reverse("").split("").join("");
        if (palabraInvertida.toLowerCase.trim === palabra.toLowerCase.trim){
            document.getElementById("polindromo").innerHTML=
            "La palabra "+ palabra + " es polindroma :)"
        }else{
            document.getElementById("polindromo").innerHTML=
            "La palabra  "+ palabra + " no es polindroma :("
        }
    }
}*/
function agregarPalabra(){
    let palabra= prompt("Ingrese la palabra","ana");
    if (palabra != null){
        let palabraInvertida = palabra.split().reverse().join();
        if (palabraInvertida.trim().toLowerCase() === palabra.toLowerCase().trim()) {
            document.getElementById("polindromo").innerHTML=
            "La palabra "+ palabra + " es polindroma :)"
        } else {
            document.getElementById("polindromo").innerHTML=
            "La palabra  "+ palabra + " no es polindroma :("
        }
    
    }
}
