/**
 * Implementando o filter
 * 
 */

 Array.prototype.filter2 = function(callback){
     const novoArray = []
     for(let i = 0; i < this.length; i++){
         if(callback(this[i], i, this)){
            novoArray.push(this[i])
         }
     }
     return novoArray
 }

 const produtos = [
    {nome: "Computador", preco: 5000.00, fragil: true},
    {nome: "Notebook", preco: 2500.00, fragil: false},
    {nome: "pote de vidro", preco: 50.00, fragil: true},
    {nome: "copo", preco: 5.00, fragil: false}
 ]


 const caro = produto => produto.preco >= 40
 const fragil = produto => produto.fragil

 console.log(produtos.filter2(caro).filter2(fragil))

 console.log(produtos.filter2(function(p){
    return p.preco >= 40.00 && p.fragil
}))