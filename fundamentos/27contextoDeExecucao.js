/*
    Front -> Navegador (window)
    Back -> Node (global)

    "É preciso conhecer o local que você executa o JS. 
    "

*/

// Local
let a = 3

// Global
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Criando uma variável maluca 
abc = 3 //Não faça isso em casa!!!
console.log(global.abc)




