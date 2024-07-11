function convertirAntesDePunto(string) {
    let resultado = '';
    let encontradoPunto = false;
    const length = string.length; //el length del string para solo calcularlo 1 vez

    for (let i = 0; i <  length; i++) { //itera por todo el string 
        const char = string[i];
        if (!encontradoPunto && char === '.') { //busca un punto
            encontradoPunto = true;
        }
        resultado += encontradoPunto ? char.toLowerCase() : char.toUpperCase();  //si ya encontró un punto los hace minuscula sino los hace mayusculas
    }

    return resultado;
}

//******************************************************** */
let stringOriginal = "hola mundo. soy Jhosep Jimenez. este es un ejemplo de texto. "; //suponiendo para facilidad que todo el text esta en miniscula
console.log("Antes: ", stringOriginal);

console.log("Después: ", convertirAntesDePunto(stringOriginal));
