/*
    Objetos: "Em JS"
    - É uma coleção de chave valor
    - E pode ter objeto dentro de objeto
    - 

*/

// Declarando

const prod1 = {}; //{} é uma forma literal de criar objeto

/* 
    (Criando dinamicamente os campos)
    Mesmo que não tenha sido 
    declarado eu posso add um valor
    */

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;

console.log(prod1);

// Evitar atributos com espaço
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

// Declarando e instaciando

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

prod2['Desconto Legal'] = 0.40

console.log(prod1, prod2)