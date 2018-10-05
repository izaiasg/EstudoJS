const saudacao = 'Opa' // Contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // Contexto léxico 2
    console.log(saudacao)
}

console.log(saudacao)
exec()