/*
    No node o objeto global é o global mesmo
    Já no browser é o window.

    O arrow é muito forte e mesmo que se use o bind
    o this permanece o mesmo.
*/

let comparaComThis = function (param) {
    console.log(this == param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)