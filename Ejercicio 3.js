function countRepetitions(string, char) { //metodo que cuenta las letras que se repiten en una frase
    let c = 0; //contador
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            c++;
        }
    }
    return c;
}

// varias fijas apra facilitar pruebas
let string = "hola como estas amigo"; //cadena
let char = "a"; //caracter

let reps = countRepetitions(string, char);

console.log(`El carácter "${char}" se repite ${reps} veces en "${string}"`);
