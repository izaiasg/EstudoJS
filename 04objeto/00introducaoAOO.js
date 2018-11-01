/**
 * Código não executável
 * 
 * - Linguagem não estruturada // Go To
 * - Linguagens estuturada // Procedural, OO, 
 * Função que manipula dados, Procedutal.
 * 
 */

 /* Procedutal - Foco em função que manipula dados*/
processamento(valor1, valor2, valor3)

/* OO - Dados e dentro desses dados tem funções 
Mundo OO 
Enxergar no mundo real e trazer para o mundo OO

*/
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento() // O foco passou a ser o objeto

// Principios importantes
/* 1º) Abstração: Extrair as caracteristas
e ações de um objeto do mundo real e trazer 
para dentro do software. Sempre levando
em consideração o contexto no qual aquele
objeto será manipulado. */

/* 2º) Encapsulamento: "Esconder os detalhes de implementação" ter os detalhes de funcionamento escondido e 
apresentar ao usuário apenas o que ele irá usar. Criando uma interface com
o usuário na qual ele só terá acesso as funções que precisa, dependendo do contexto
deixando escondido o "Como funciona isso por baixo". 

A interface de comunicação com o usuário é fundamental. Ex.: das montadoras onde
um carro precisa apertar um botão no teto para injetyar mais combustivel
e outro onde é precisso girar uma manivela para passar a macha.
Desa forma é possível mudar a parte de dentro do objeto, sem interferir na 
vida do usuário.
*/

/* 3º) herança (prototype) - Reuso
Relação "é um"
Evita centralizar a complexdade em um unico ponto, pois
se tem um objeto pai e seus filhos cada um com suas complexidades
expecificas, mas tendo coisas em comum herdadas do pai
JS só permite que tenha um unico pai.

Priorize a composição(Tem um) ao invez de herança, pois ela pode trazer confusão
em determinadas partes do código. 

*/ 

/* 4º) Polimorfismo: multiplas formas

Atravez de um conceito genérico, você consegue substituir por conceitos concretos.
Pode acrescentar/usar carácteristicas do filho no pai. 

*/