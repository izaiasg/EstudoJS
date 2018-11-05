/**
 * Coleção dinamica de chave/valor
 * 
 * Da para brincar com os objetos,
 * colocando obijeto dentro de outro
 * e criando arrays de objetos dentro de 
 * outro objeto, além de funções e etc.
 * 
 * 
 */

 const produto = new Object
 produto.nome = 'Cadeira'
 produto ['marca do produto'] = 'Generica'
 produto.preco = 220

 console.log(produto)

 delete produto.preco
 delete produto ['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 19
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculoValorSeguro: function(){
        // ...
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000
console.log(carro.proprietario.endereco.numero)

carro['proprietario']['endereco']['logadouro'] = 'Av Caruaru'

/*Pode acessar dessa forma quando receber uma string*/
console.log(carro['proprietario']['endereco']['logadouro'])

delete carro.condutores
delete carro.proprietario
delete carro.calculoValorSeguro

console.log(carro)
console.log(carro.condutores)