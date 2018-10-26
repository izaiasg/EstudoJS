/**
 * Funções declaradas da foma normal podem ser chamadas 
 * a qualquer momento. Já as que foram armazenadas em
 * variáveis, só podem ser chamadas depois de ser 
 * declaradas.
 * 
 * 
 */

 console.log(soma(5, 1))
 /*
 * console.log(sub(5, 1))
 * 
 * Se chamar antes dá erro, 
 * pois o JS só carrega as 
 * funções que foram declaradas
 * normalmente.
 */

 // function declaration
 function soma(x, y){
     return x + y
 }

 // function expression
 const sub = function(x, y){
     return x - y
 }

 // named function expression
 const mult = function(x, y){
    return x * y
}