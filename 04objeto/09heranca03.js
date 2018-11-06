/**
 * Uma nova forma de declarar quem é o pai
 * de um determinado objeto.
 */

 const pai = { nome: 'Pedro', corCabelo: 'Preto'}

 const filha = Object.create(pai)
 filha.nome = 'Ana'
 console.log(`Nome: ${filha.nome} / Cor do cabolo: ${filha.corCabelo}`)

 const filha2 = Object.create(pai, {
     nome: { value: 'Bia', writable: false /*não poderá ser alterado*/, enumerable: true /*Poderá ser exibido nas chaves/valor*/}
 })

 console.log(filha2.nome)
 filha2.nome = 'Carla'
 console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

 console.log(Object.keys(filha))
 console.log(Object.keys(filha2))

 /* Para descobrir se um atributo é de um objeto ou foi erdado de seu pai. */
 for(let key in filha2) { // Percorre todos os atributos de um objeto
     filha2.hasOwnProperty(key)? // Se essa chave pertencer a filha 2 imprima
        console.log(key) : console.log(`Por herança: ${key}`) // Se não, imprima por herança
 }