/*
    Função é um bloco de código
    que recebe para metros e retorna
    um resultado.

    Ela pode não retornar nada ou não
    receber nada.

    Não é tão formal quanto 
    outras linguagens
    Nem tão rigoroso


*/

// Declarando uma função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

// Chamando
imprimirSoma(21, 54)

// Declarando uma função com retorno
/* 
    Mesmo retornando valor
    Não precisa dizer o que 
    ela retorna (Tipagem Fraca)
    Caso b não seja passado 
    é setado como 0 padrão
*/
function soma(a, b = 0){ 
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
