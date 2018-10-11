/*
    O fato de não receber nenhum parametro não quer diser que não possa passar nenhum

    Mesmo que não se tenha declarado os parametros dá para recebelos atravez do "arguments"
    Que é um array
*/

function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3))
console.log(soma('a', 'b', 'c'))