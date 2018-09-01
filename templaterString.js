// Forma tradicional
const nome = "Aline";
const concatenacao = "Olá, " + nome + "!";

console.log(concatenacao);

// Utilizando templater dá para manipular melhor as strings
const template = `
    Olá, 
    ${nome}!`;

console.log(template);

// Expressões
console.log(`1 + 1 = ${1+1}`);

// Função sendo chamada de dentro da string
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);