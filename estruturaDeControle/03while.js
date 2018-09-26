/*
    Quando não se tem um número 
    exato de repetições
    Só entra se for verdadeiro

*/

function getInteirosAlternadosEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while (option != -1) {
    option = getInteirosAlternadosEntre (-1, 10)
    console.log(`Opção escolhida foi ${option}`)
}

console.log('Até a próxima!')

/* ----------------------
    Do/while

    Primeiro executa a primeira vez
    depois confere se é verdadeiro

------------------------- */

let option2 = -1

do {
    option2 = getInteirosAlternadosEntre (-1, 10)
    console.log(`Opção escolhida foi ${option2}`)
} while (option2 != -1)



console.log('2º) Até a próxima!')

