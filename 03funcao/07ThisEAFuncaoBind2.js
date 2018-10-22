/*
    Utilizando uma função normal, podesse usar o 
    bind para explicitar qual o contexto lexco que
    a função vai buscar aquela variável.
*/

function Pessoa() {
    this.idade = 0

    const self = this //Outra maneira seria declarando uma função e usando ela no lugar do this
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    } /* .bind(this) */ , 1000)
}

new Pessoa