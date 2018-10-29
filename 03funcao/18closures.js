/**
 * Closures é o escopo criado quando uma função é declarada
 * Esse escopo permite a função acessar e manipular variáveis externas à função
 *  
 * Contexto léxico em ação!
 * 
 */

 function fora(){
     const x = 'Local'
     function dentro(){
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()
 console.log(minhaFuncao())