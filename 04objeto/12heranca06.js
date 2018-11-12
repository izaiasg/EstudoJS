/**
 * 
 */

 function Aula(nome, videoID) {
     this.nome = nome
     this.videoID = videoID
 }

 const aula1 = new Aula('Bem Vindo', 132)
 const aula2 = new Aula('Bem Vindo', 456)
 console.log(aula1, aula2)
 
/* Simulando o new

f função passada por parametro

Com o ...params, a função pode
receber vários parametros, e adciona-los em 
um array.*/
function novo(f, ...params){ 
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)

console.log(aula3, aula4)