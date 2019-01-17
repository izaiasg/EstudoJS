/**
 * Colocando um pouco de ordem nessa liberdade
 * que o JS dá, por ser fracamente tipada.
 * 
 * 
 */

/*Object.prevntExtensions -> não permite que sejam 
acrescentados novos atributos a um objeto. Mas, é 
possível excluir.*/

// Exemplo

const produto = Object.preventExtensions ({
    nome: "qualquer",
    preco: 1.99,
    tag: 'promoção'
})

// Teste para ver se é extensivel
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = "outro"
produto.novoAtributo = "novo"
delete produto.tag
console.log(produto)

// --------------------------------------
/**
 * Object.seal -> selar
 * - Não pode adcionar nem excluir novos objetos
 * - Pode alterar os que já existem
 */

const pessoa = { nome: 'Aline', idade: 20}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.nome = 'Aline Micaela'
delete pessoa.nome
pessoa.sobrenome = 'Batista'
console.log(pessoa)

// --------------------------------------
/**
 * Object.freeze -> "Congela o objeto"
 * - Não pode alterar, adicionar e remover.
 */

 const cachorra = { nome: 'Crystal', idade: 0.4 }
 Object.freeze(cachorra)

 cachorra.idade = 1.0
 delete cachorra.nome

 console.log(cachorra)