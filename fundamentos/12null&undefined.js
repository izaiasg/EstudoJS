// Em objetos a pasagem é feita por referencia de memória

const a = {Nome: "Izaias"}
console.log(a.Nome)
const b = a
b.Nome = "Aline"
console.log(a.Nome)

// Diferente de pasagem de tipos primitivos que é foita uma cópia dos valores
let x = 5
let y = x
console.log(x, y)
y++
console.log(x, y)

// Quando ainda não se atribuiu nada a uma váriavel por padrão ela é undefine
let teste
console.log(teste)

/* 
    - O NULL significa ausencia de valor. 
    Para explicitar que não foi atribuido 
    nenhum valor aquela variável. Isso em JS
    diferente de outras linguagens que 
    pegam lixo de memória. 

    - Tomar coidado com os valores null.
    Pois pode gerar problemas. Uma saida
    Seria utilizar um valor padrão. E caso
    realmente seja preciso, dar prioridade 
    ao null.
*/

let w = null
console.log(w)

//