/**
 * 
 * 
 */

 //Usando a notgação literal 
 const obj1 = {}
 console.log(obj1)

 // Object em JS
 const obj2 = new Object
 console.log(typeof Object, typeof new Object)
 console.log(obj2)

 // Funções construtoras
 function Produto(nome, preco, desc) {
     this.nome = nome
     this.getPrecoComDesconto = () => {
         return preco * (1 - desc)
     }
 }

 const p1 = new Produto('Caneta', 7.99, 0.15)
 const p2 = new Produto('Notebook', 29998.99, 0.25)
 console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

 //Função Factory (Função que fabrica objeto)

 function criaFuncionarios(nome, salarioBase, faltas){
     return {
         nome,
         salarioBase,
         faltas,
         getSalario(){
             return (salarioBase / 30) * (30 - faltas)
         }
     }
 }

 const f1 = criaFuncionarios('Joao', 7980, 4)
 const f2 = criaFuncionarios('Maria', 11400, 1)
 console.log(f1.getSalario(), f2.getSalario())

 // Object.create

 const filha = Object.create(null)
 filha.nome = 'Ana'
 console.log(filha)

 // Uma função famosa que retorna Objecto...
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)