/*
    Váriaveis GLOBAIS

    O let é diferente do var.
    Pois, mesmo sem está em uma
    função, estando em qualquer 
    escopo a variavel se torna local.

    E, a prioridade é para um let que esja
    no mesmo escopo. Se não achar ele busca 
    o que está mais perto.

    "O let foi criado para resolver os problemas
    do var. Foi criado um novo tipo para não
    quebrar as aplicações que usavam o var."

*/

let numero = 1
{
    {
        {
            let numero = 2
            console.log('dentro = ', numero)
        }

        console.log('antes = ', numero)
    }
}

console.log('fora = ', numero)