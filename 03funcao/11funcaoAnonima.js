/**
 *
 * Treinar, refazer(criar novos no mesmo contexto) os exemplos sem olhar e entendendo o que está fazendo.
 * 
 * Função anonima é básicamente uma função sem nome.
 * A função arrow sempre é anomima, visto que não precisa
 * dar nome a ela.
 * 
 */

 const soma = function (x, y){
     return x + y
 }

 const resultSoma = function (a, b, operacao = soma){
     console.log(operacao(a, b))
 }

 resultSoma(2, 3)
 resultSoma(2, 3, function(x, y){
     return y - x
 })
 resultSoma(2, 3, (x, y) => x * y)

 const pessoa = {
     falar: () => console.log('Olá')
 }

 pessoa.falar()