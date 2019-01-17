/**
 * Java Script Object Notecion
 * Notação de Obrjetos Java Script
 * 
 * É um formato textual, de dados
 * 
 * Serve para ser usado entre sistemas completamente diferentes
 * 
 * 
 */

 // Exemplo de conversão de objeto para JSON
 const obj = {a: 1, b: 2, c: 3, soma () { return a + b + c}}
 console.log(JSON.stringify(obj))

 //console.log(JSON.parse("{a:1, b:2, c:3}"))
 //console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))
 // Tem que colocar primeiro ('') e dentro ("") ->para os atributos e strings
 console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
 console.log(JSON.parse('{"a":1, "b": "string", "c":true, "d": {}, "e": []}'))