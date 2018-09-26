/*
    O switch em JS é pobre
    Tem que colocar o break,
    senão, ele imprimirá 
    tudo que tem em baixo.
    Só funciona do jeito que está

    Não é obrigado colocar o 
    default no final

    Pode usar bloco de código {
        ...
    }


*/

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
        console.log('Fim!')
}

imprimirResultado(5.91)
imprimirResultado(2.91)
imprimirResultado(7.91)
imprimirResultado(9.91)
imprimirResultado(25)