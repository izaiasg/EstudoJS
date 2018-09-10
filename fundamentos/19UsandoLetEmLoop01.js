/*
    Usando let o i só é valido 
    dentro do escopo do laço
*/

for(let i = 0; i < 5 ; i++){
    console.log(i)
}

//console.log('i = ', i) // Não existe fora do escopo do loop

// Função dentro de loop

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()