/* 
    Os arrays em JS são omogeneos,
    pode ter tanto int e string, 
    quanto qualquer outro tipo

    E também se adapita ao tamanho,
    ou seja, vai crescendo conforme o nescessário.

*/

// Declarando e instanciando
const valores = [23.5, 56.9, 65.9, "Izaias",15.8];

console.log(valores[0], valores[3]);

// Add valore
valores[5] = 'Aline';
valores.push({id: 3}, false, null, 'teste')
console.log(valores);

console.log(valores[5], " <3 ", valores[3]);

console.log(valores);

// Retorna a quantidade de elementos
console.log(valores.length);

// Excluindo valores de um array
console.log(valores.pop()); /*Retorna o valor que foi retirado*/
console.log(valores.length);
delete valores[0];
console.log(valores);

// Em JS o array é do tipo object

console.log(typeof valores);

