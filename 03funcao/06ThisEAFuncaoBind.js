/*
    A função bind é importante para garantir o escopo onde o this será chamado.
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar (){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // Conflito de paradigmas: funcional e OO
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //Através do bind, essa constante busca o this de pessoa.
falarDePessoa()
