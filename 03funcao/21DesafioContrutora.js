/**
 * Refazer essa classe usando função construtora
 */

 // Classe
class Pessoa {
    constructor(nome){
        this.nome = nome // Se não colocar o this, não terá acesso a essa variavel fora
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

// Função construtora
function PessoaContr (nome){

    // método público 

    this.falar = function (){
        console.log(`Meu nome é: ${nome}`)
    }
    
}

const p1 = new PessoaContr("Izaias")
p1.falar()
