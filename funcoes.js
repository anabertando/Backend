import i from 'readline-sync'

let frase = i.question('Informe o texto para ser convertido:');

function Maiusculas(texto){
    return texto.toUpperCase();
}

const cxAlta = function(texto){
    return texto.toUpperCase()
}

const tudoMaiusculo = (texto)=> texto.toUpperCase();
console.log (tudoMaiusculo(frase));