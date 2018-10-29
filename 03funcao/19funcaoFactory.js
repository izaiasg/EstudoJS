/**
 * Funções fábrica
 * 
 * - Serve para evitar a repetição de 
 * código (função que cria objetos)
 */

 //Factory simples
 function criarPessoa(){
     return {
         nome: 'Aline',
         sobrenome: 'Micaela'
     }
 }

 console.log(criarPessoa())

 //criarPessoa2() passando os parametros

 function criarPessoa2(nome, idade){
     return {
         nome: nome,
         idade: idade
     }
 }

 console.log(criarPessoa2('Aline', 20))

 function criarProduto(nome, preco, desconto = 0.1){
     return {
         nome,
         preco,
         desconto
     }
 }

 console.log(criarProduto('Monitor', 500.00, 0.5))
 console.log(criarProduto('Smart TV', 1500.00))