/**
 * Essa constante é do "ponteiro" que referencia o objeto.
 * 
 */

 // Pessoa -> 123 -> {...}
 const pessoa = {nome: 'Joao'}
 pessoa.nome = 'Pedro'
 console.log(pessoa)


 // Pessoa -> 456 -> {...}
 //pessoa = { nome: 'Ana'} (Tentando atribuir um novo endereço de memória a um CONST)

 // Congelar um objeto (não pode mais ser alterado)
 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 console.log(pessoa.nome)

