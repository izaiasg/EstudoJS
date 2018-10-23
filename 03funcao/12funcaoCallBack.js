/**
 * Assistir youtube/aulas de programação/ padrões de projetos ep01
 * 
 * A ideia é passar uma função para outra função
 * e quando determinado evento acontecer essa função que 
 * foi passada será chamada de volta.
 * 
 * E pode ser chamada várias vezes.
 * 
 */

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
/**
 * Percorrerá o array chamando essa função para cada posição, recebendo 
 * como parametros conteúdo e indice, respectivamente.
 */
fabricantes.forEach(imprimir) 
fabricantes.forEach((fabricante, indice) => console.log(fabricante, indice))

