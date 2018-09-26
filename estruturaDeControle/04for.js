/*
   sintax é a mesma
*/

const notas = [6.1, 3.6, 5.5, 6.5, 5.8]

for(let i = 0; i < notas.length; ++i){
    console.log(`nota = ${notas[i]}`)
}

/* ----------------------
    For/IN

    Não precisa muito controlar 
    o i. Para percorrer arrays
    e objetos.

    Declarando com o let para 
    ficar naquele escopo do for

------------------------- */
//arrays
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Aline',
    sobrenome: 'Micaela',
    idade: '20'
}

//objetos
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}