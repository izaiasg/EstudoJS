
// Aritiméticos - Operadores binários

const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = a - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)

// Relacionais - Operadores binários

/*
    Igual (==) ou estritamente igual (===)
    Priorizar o uso do (===)
*/

console.log('01) ', '1' == 1)
console.log('02) ', '1' === 1)
console.log('03) ', '3' != 3)
console.log('04) ', '3' !== 3)

console.log('05) ', 3 < 2)
console.log('06) ', 3 > 2)
console.log('07) ', 3 <= 2)
console.log('08) ', 3 >= 2)


// Lógicos - Operadores binários

/*
    v e v -> v
    v e f -> f
    f e ? -> f
    v ou v -> v
    f ou v -> v
    v ou f -> v
    v xor v -> f
    v xor f -> v
    f xor v -> v

    - Unário
    !f -> v
    !v -> f
*/

/* 
    Função para trabalhar os operadores lógicos
    Só vai comprar a TV de 32 se for 
    exclusivamente um dos dois
*/

function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Dessa forma é criado um novo objeto, já com os atributos com esses nomes
}

console.log(compras(true, false))

// Operadores Unários

// Manter o codigo o mais simples possível
// Comentarios relevantes
// Evitar códigos confusos

let x = 1
let y = 2

x++
console.log(x)
--x
console.log(x)

console.log(++x == y--)
console.log(x === y)

// Ternário

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Primeiro a operação logica depois a desição

console.log(resultado(7.1))