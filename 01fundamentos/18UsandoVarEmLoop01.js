/*
    Usando um for o var quando sai
    continua com o que foi incrementado
    fora do escopo do laço.

*/

for(var i = 0; i < 5; i++){
    console.log(i)
}

console.log('i = ', i)

// Função dentro de loop

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
