/**
 * 
 */

 const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

 pilotos.pop() //Remove o ultimo elemento do array
 console.log(pilotos)

 pilotos.push('Verstappen') //adciona ao ultimo elemento do array
 console.log(pilotos)

 pilotos.shift() //Remove o primeiro elemento do array
 console.log(pilotos)

 pilotos.unshift('Haminton') // Adiciona no primeiro elemento do array
 console.log(pilotos)

 // splice pode adicionar ou remover elementos dependendo dos parametros
 pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona esses dois depois do terceiro
 console.log(pilotos)
 
 pilotos.splice(3, 1) // remove o 4º
 console.log(pilotos)

 // Retorna um novo array
 const algunsPilotos1 = pilotos.slice(2) // novo array apartir do indice 2
 console,log(algunsPilotos1)

 const algunsPilotos2 = pilotos.slice(1, 4) // do 1 ao 3 o 4 não entra
 console.log(algunsPilotos2)