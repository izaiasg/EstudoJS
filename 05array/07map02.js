/**
 * A função map serve para percorrer um array e retornar para outro. 
 * E nesse processo pode-se fazer alterações.
 */

 const carrinho = [
     '{"nome": "Borracha", "preco": 3.45}',
     '{"nome": "Caderno", "preco": 13.90}',
     '{"nome": "Kit de Lapis", "preco": 41.22}',
     '{"nome": "Borracha", "preco": 7.50}'
 ]


// --------------------------------------
// Minha solução

 // Objeto que será usado no processo
 var produto = new Object


 // Retorna apenas um array com os preços do array carrinho
 var precos = carrinho.map(function(elemento){
     // Converte os elementos que vem do array carrinho para objetos
     produto = JSON.parse(elemento)
     return produto.preco
 })

 console.log(precos)

 // --------------------------------------
// Solução do curso - Dois map's

// Primeiro map converte para objeto
// Segundo map retorna só os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

 // --------------------------------------