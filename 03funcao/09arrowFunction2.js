/*
    CTRL + ALT + N -> Inicia a execução
    CTRL + ALT + M -> Para a execução
*/

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa