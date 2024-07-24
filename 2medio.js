/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.  */

function Anagrama(pal1, pal2) {
    if (pal1 === pal2) {
        return false;
    }

    if ( pal1.length !== pal2.length) {
        return false;
    }

    const ordenarPalabras = palabra => palabra.toLowerCase().split('').sort().join('');
    return ordenarPalabras(pal1) === ordenarPalabras(pal2);
}

console.log(Anagrama("ramo", "roma"));