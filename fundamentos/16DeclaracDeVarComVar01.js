/*
    VARIÁVEIS GLOBAIS

    Fuja do escopo global!!!

    A variável var independente de
    onde está (escopo). Ela fica visível
    Para todos os escopos.
    Entretanto se for dentro de uma função
    ela só será visivel dentro do 
    escopo da função.

*/
{
    {
        {
            var global = 'Será???'
        }
    }
}

console.log(global)

function teste (){
    var local = 123
    console.log(local)
}

teste()
console.log(local)
