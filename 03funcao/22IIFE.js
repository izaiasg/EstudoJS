/**
 * Função auto envocada 
 * 
 * É usada para fugir do escopo global e evitar quebrar aplicações 
 * por mexer em variáveis compartilhadas
 * 
 */

 (function (){
     console.log('Será executado na hora!')
     console.log('Foge do escopo mais abrangente!')
 })