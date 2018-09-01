const escola = "Cod3r";
console.log(escola);

// Imprime o 3º char
console.log(escola.charAt(2));

// Imprime o código da tabela ascii
console.log(escola.charCodeAt(2));

// Confere se tem esse determinado caractere na string
console.log(escola.indexOf('c'));

// Imprime apartir do 2º
console.log(escola.substring(1));

// Imprime do 1º ao 2º
console.log(escola.substring(0,3));

// Substitue um dos caracteres e imprime
console.log(escola.replace(3, 'e'));

// Converte em array
console.log(("Ana, Maria, Pedro").split(","));