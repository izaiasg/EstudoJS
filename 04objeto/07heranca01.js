/**
 * O principal objetivo da herança é evitar o (CTRL + C) (CTRL + V)
 * 
 * Se tiver que escolher entre herança e composição escolha a composição.
 * Pois é mais flexivel. Pois herança você só pode ter um pai.
 * 
 * A herança em JS é um pouco diferente do que em java e em outras linguagens.
 * Pois é baseada em protótipos(esse protótipo é o pai do objeto em questão - PAI). 
 * 
 * [[Prototype]] -> É o conceito de protótipo em JS.
 * Onde um objeto, aponta por default para esse [[Prototype]].
 * E para criarmos uma herança temos que criar um objeto pai
 * e apontar os filhos para ele.
 * 
 * 
 */

 const ferrari = {
     modelo: 'F40',
     velMax: 324
 }

 const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // É, por default, o pai do objeto ferrari.
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)