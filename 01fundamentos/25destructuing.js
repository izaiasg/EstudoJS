/*
    Ele tira da estrutura alguma coisa
    ele desestrutura
    Utilizando os operadores especificos de cada tipo de dado

    É um novo recurso add no ES2015


*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABS',
        numero: 1000
    }
}

// Objeto

/* Desestrutura os atributos 
nome e idade do objeto pessoa*/
const {nome, idade} = pessoa
console.log(nome, idade)

/* Desestrutura os atributos 
nome e idade do objeto pessoa 
nas variaveis criadas n e i*/
const {nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco: { logadouro: l, numero: n2, cep: c}} = pessoa
console.log(l, n2, c)

// Array

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) 

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

/*
    Em funções podesse passar como parametro 
    um objeto e desestruturá-lo na declaração
    de parametros
 */

 // Objeto
function rand({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Arredondar para baixo
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({}))
console.log(rand({min: 955}))

// Array
function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //Arredondar para baixo
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))