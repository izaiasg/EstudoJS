/**
 * Diferença entre usar ou não usar o callback
 * 
 * 
 */

 const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

 // Sem callback
 const notasBaixas1 = []
 // Percorre todos os elementos do array incrementando (i)
 for (let i in notas){
     if (notas[i] < 7){
        notasBaixas1.push(notas[i]) //A função push irá acrescentar esse elemento ao array notas
     }
 }

 console.log(notasBaixas1)

 // Com callback
 /**
  * A função filter vai filtrar todos os elementos
  * do array em cima de um determinado critério e 
  * se for V ela add ao array, caso 
  * contrário não adcionará.
  */
 const notasMenoresQue7 = nota => nota < 7
 const notasBaixas2 = notas.filter(notasMenoresQue7)

 console.log(notasBaixas2)