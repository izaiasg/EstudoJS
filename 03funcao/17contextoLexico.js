/**
 * É levado em consideração o local onde a função foi criada
 * 
 */

 const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()