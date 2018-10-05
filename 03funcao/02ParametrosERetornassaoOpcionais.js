/*
    Linguagem facamente tipada

    Essa flexibilidade ajuda e atrapalha dependendo do uso
    Portanto, devemos ter cuidado!!!



   */

function area (largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}


console.log(area(2,2))
console.log(area(2)) // Se passar menos do que a função espera NaN
console.log(area()) // Se passar menos do que a função espera NaN
console.log(area(2, 3, 4, 5, 6)) // Se passar mais do que a função espera ela ignora o exesso
console.log(area(5, 5))
