/**
 * Array em JS é um objeto
 * Ele é uma estrutura dinamica (Cresce e diminue dinamicamente)
 * "Pode ter uma salada de fruta dentro de um array" NÃO
 * 
 */

// Array em JS é um objeto
console.log(typeof Array, typeof new Array, typeof [])

// Formas de instanciar um array
// 1) Forma não muito recomendada
let aprovados = new Array('Aline', 'Izaias', 'Crystal')
console.log(aprovados)

// 2) Forma recomendada
aprovados = ['Aline2', 'Izaias2', 'Crystal2']
console.log(aprovados[0]) // Acessa atraves do indice
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Não existe

// Adcionando novo elemento
aprovados[3] = 'Paulo' // Essa forma é mais apropriada para alterar um já existente
aprovados.push('Neide')
console.log(aprovados)

// Tamanho do array
console.log(aprovados.length)

aprovados[9] = 'nove'
console.log(aprovados)
console.log(aprovados[8] === undefined)

//ordena o array
aprovados.sort() // esse método altera o próprio array (Tem outros que criam um novo)
console.log(aprovados)

// excluindo
delete aprovados[1] // Só vai colocar um undefined no indice
console.log(aprovados)
aprovados[1] = 'Izaias3'
console.log('atual', aprovados)
// splice serve para excluir, adicionar e os dois ao mesmo tempo (movimenta para o começo quando exclui)
aprovados.splice(1, 1) // (1 /* Começa aqui */, 1 /* Mas só apaga o primeiro*/)
console.log(aprovados)
aprovados.splice(1, 2) // (1 /* Começa aqui */, 2 /* Apaga até o segundo*/)
console.log(aprovados)
// (1 /* Começa aqui */, 2 /* Apaga até o segundo e adciona os dois novos elementos*/)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Caso não queira excluir coloca 0
console.log(aprovados)
