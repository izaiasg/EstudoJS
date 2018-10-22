/*
    É muito utilizada para criar códigos mais enxutos
*/

let dobro = function(a){
    return a * 2
}

dobro = a => {
    return a * 2
}

dobro = a => a * 2

console.log(dobro(3))

let saudacao = function (){
    return 'Olá'
}

saudacao = _ => 'Olá' // Possui parametro entretanto o ignora

saudacao = () => 'Olá' 

console.log(saudacao())