/**
 * Criação de duas classes 
 * lancamento: lançametos financeiros (Salario: 650, conta de luz: 200,00...)
 * ciclo financeiro: vai ter os lançamentos e depois irá gerar um relatório com o
 * ciclo financeiro: vai somar os lançamentos e decrementar de um salário
 * 
 * Pode usar classes dessa forma ou funções construtoras (Que é o "JEITO JS DE TRABALHAR")
 */

 class Lancamento {
     // função que instacia os parametros
     constructor(nome = 'padrão', valor = 0){
         this.nome = nome
         this.valor = valor
     }
 }

 class CicloFinanceiro {
     constructor(ano, mes){
         this.ano = ano
         this.mes = mes
         this.lancamentos = []
     }
     //Adciona os lançamentos ao arrey interno
     addLancamentos(...lancamentos){ 
         lancamentos.forEach(l => this.lancamentos.push(l))
     }
     //Calcula o valor dos lançamentos
     sumario(){
         let valorConsolidado = 0
         this.lancamentos.forEach(l => {
             valorConsolidado += l.valor
         })
         return valorConsolidado
     }
 }

 const salario = new Lancamento('Salario', 650.00)
 const contaDeLuz = new Lancamento('Luz', -250)
 
 const contas = new CicloFinanceiro(6, 2018)
 contas.addLancamentos(salario, contaDeLuz)
 console.log(contas.sumario())