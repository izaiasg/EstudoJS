/**
 * Filter - serve para gerar um novo array tomando como base o que foi passado. 
 * Seguindo alguns criterios.
 * 
 */

 const produtos = [
    {nome: "Computador", preco: 5000.00, fragil: true},
    {nome: "Notebook", preco: 2500.00, fragil: false},
    {nome: "pote de vidro", preco: 50.00, fragil: true},
    {nome: "copo", preco: 5.00, fragil: false}
 ]

 console.log(produtos.filter(function(p){
     return p.preco >= 40.00 && p.fragil
 }))

 // Segunda forma de fazer

 const caro = produto => produto.preco >= 40
 const fragil = produto => produto.fragil

 console.log(produtos.filter(caro).filter(fragil))

