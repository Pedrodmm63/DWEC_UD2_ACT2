function separaNumeros(...parametros) {
    var salida = "";
    let numeros = new Array();

    for (let i = 0; i < parametros.length; i++) {
        if (typeof parametros[i] === 'number' && !isNaN(parametros[i])) {
            numeros.push(parametros[i])
        }
        else console.log("No es numero " + parametros[i]);
    }
    return numeros
}

console.log(separaNumeros("Hola", 2222, "Adios", undefined, new Date()));