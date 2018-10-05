/*
    "Jogar para cima."
    Em JS as variaveis declaradas 
    à baixo de onde ela foi chamada
    não dá erro caso ela tenha 
    cido declarada em baixo.
*/

console.log('1', a)
var a = 'aa'
console.log('2', a)

// Não ocorre para o let

console.log('1', a)
let a = 'aa'
console.log('2', a)