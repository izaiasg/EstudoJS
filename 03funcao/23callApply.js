/**
 * A difereça entre elas é a forma de passar os parametros
 * 
 * call é para definir o contexte no qual aquela 
 * função foi chamada
 * 
 * 
 */

 function getPreco(imposto = 0, moeda = 'R$'){
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
 }

 const produto = {
     nome: 'Notebook',
     preco: 4589,
     desc: 0.15,
     getPreco
 }

 global.preco = 20
 global.desc = 0.1
 console.log(getPreco())
 console.log(produto.getPreco())

 const carro = { preco: 49990, desc: 0.20 }

 /*
 A diferença é só a maneira como 
 se passa os parqametros.
 Call = Pode ser passado diretamente todos
 os parametros que serão usados no contexto
 da função. O primeiro parametro é o 
 contexto, depois todos os parametros que
 seraão passados para a função.

 Apply = O primeiro parametro é o 
 contexto, depois todos os parametros que
 seraão passados para a função. Só que em um array.
 */
 console.log(getPreco.call(carro))
 console.log(getPreco.apply(carro))

 console.log(getPreco.call(carro, 0.17, '$'))
 console.log(getPreco.apply(global, [0.17, '$']))