/**
 * Cadeia de protótipos (prototype chain)
 */

 Object.prototype.attr0 = '0' // NÃO FAÇA ISSO EM CASA!!!
 const avo = { attr1: 'A' } // Avo aponta para o Object.prototype
 const pai = { __proto__: avo, attr2: 'B',  attr3: '3' } // Pai aponta para o avo
 const filho = { __proto__: pai, attr3: 'C' } // Filho aponta para o pai
 console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // "Pode sombrear um valor de pai, caso tenha essamesma variável."
}

const volvo = {
    modelo: 'V40',
    status () {
        /* 
        * O super server para dizer que é no contexto do pai. 
        * Se não chamasse o super, o objeto entraria em loop.
        *  */
        return `${this.modelo}: ${super.status()}` 
    }
}

/* Setando o pai do objeto. */
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())