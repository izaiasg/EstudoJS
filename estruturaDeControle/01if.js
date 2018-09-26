function notaProva (nota){
    if(nota >= 7.0){
        console.log("Passou")
    }
    if(nota < 7.0){
        console.log("Não passou")
    }
}

notaProva(2.5)
notaProva(8.5)

// ------------------- //

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

/* 
    Usando "else if" é possível colocar 
    mais de um if e o programa só irá 
    entrar no primeiro que for verdadeiro

    "O último else é opcional
    e pode ter quantos "else if" quiser."

*/

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quandro de Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }

    console.log('Fim!')

}

imprimirResultado(5.91)
imprimirResultado(2.91)
imprimirResultado(7.91)
imprimirResultado(9.91)
imprimirResultado(25)

// ------------------- //