/**
 * Evitar erros ao passar parametros
 * Fazer testes antes de usar os parametros que foram passados
 * 
 * Em JS, é mais interessante pois trabalha diretamente com atributos.
 * E usa os get/set para atribuir eles a variáveis.
 * 
 * Existe uma convensão em JS onde as variáveis que começam com (_)
 * Ex.: _variavel. 
 * Podem ser alteradas, entretanto se está disendo que essa variavel é
 * exclusiva do objeto que ele foi declarada.
 * 
 * JS não aceita sobrecarca de métodos, a não ser nos get/set.
 */

 const sequencia = {
     _valor: 1,
     get valor() { return this._valor++ },
     set valor(valor) {
         if(valor > this._valor) {
             this._valor = valor
         }
     }
 }

 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 1000
 console.log(sequencia.valor, sequencia.valor)
 sequencia.valor = 900
 console.log(sequencia.valor, sequencia.valor)