/**
 * 
 */

 const pessoa = {
     nome: 'Rebeca',
     idade: 2,
     peso: 13
 }

 console.log(Object.keys(pessoa)) // Pega as chaves de um objeto
 console.log(Object.values(pessoa)) // Só os valores
 console.log(Object.entries(pessoa)) // Arrays de pares de chave valor

 //Percorrendo o array for in to com o e
 Object.entries(pessoa).forEach(e => {
     console.log(`${e[0]}: ${e[1]}`)
 })

//Percorrendo o array forEach com destruct
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

/* Deinir uma propriedade de um objeto. 
* (De uma foma mais completa) 
* Pode "congelar apenas uma variável."
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Se poderá ser listada (em Object.keys())
    writable: false, // Se vai ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/12/2018' 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015) "Concatenação de objetos"
const desc = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(desc, o1, o2) // O primeiro é o objeto de destino, seguido dos que irão concatenar nele.

console.log(obj)

Object.freeze(obj) // Congela o obj

obj.a = 2
console.log(obj.a)