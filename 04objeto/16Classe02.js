/**
 * Classe é só uma forma diferente de escrever uma função
 * No fundo tudo é convertido em função
 * 
 * Como funciona a herança em classes
 */

 class Avo {
     constructor(sobrenome){
         this.sobrenome = sobrenome
     }
 }

 class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao        
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)