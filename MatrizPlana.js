/**
 * matriz plana
Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.

let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
 */

let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
multiDimensión.flat();
console.log(multiDimensión.flat().flat().flat());

prompt("La matriz en 1D es " + "[" + multiDimensión.flat().flat().flat() + " ]");
