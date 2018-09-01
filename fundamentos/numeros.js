const peso1 = 1.2;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// VErifica se é um inteiro
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// Mostra o tipo dessa variável/Constante
console.log(typeof peso1);

// Determina o número de casas decimais
console.log(peso1.toFixed(2));

// Imprime a base especificada nesse caso 2 (binário)
console.log(peso2.toString(2));