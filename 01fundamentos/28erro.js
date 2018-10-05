/*
    Tente evitar mostrar erro ao usuário
*/

function tratarELancar(erro) {
    //throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'

    throw {
        nome: erro.nome,
        msg: erro.menssage,
        date: new date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)