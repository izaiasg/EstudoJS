/**
 * Exemplo de callback no browser
 */

 /**
  * document: Aponta para toda sua página
  * 
  * getElementsByTagName: acessa os elementos apartir de uma tag
  * e a resposta dessa função é um array e para acessar precisa do indice
  * 
  * e um onclick, para cada vez que o usuário clicar no body
  * o (e) é de evento.
  */
 document.getElementsByTagName('body')[0].onclick = function (e){
     console.log('O evento ocorreu!')
 }