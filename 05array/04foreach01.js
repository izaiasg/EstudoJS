/**
 * Percorrendo arrays
 */

 const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

 /**
  *  A função forEach percorrerá o 
  * array e retornará o nome e o indice
  * que serão recebidos como parâmetro 
  * pela função que irá imprimir
  * 
  */
  
 
 aprovados.forEach(function(nome, indice, array){
     console.log(`${indice + 1}) ${nome}`)
     console.log(array)
 })

 console.log(`--------------- \n Arron function`)

 aprovados.forEach(nome => console.log(nome))

 const exibirAprovados = aprovados => console.log(aprovados)
 aprovados.forEach(exibirAprovados)