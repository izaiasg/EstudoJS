/**
 * Entender mais sobre a função e o prototype da função
 * 
 * todos os objetos criados a partir de
 * uma mesma função tem o mesmo pai
 * 
 * 
 * 
 */

 function MeuObjeto() {}
 console.log(MeuObjeto)

 const obj1 = new MeuObjeto
 const obj2 = new MeuObjeto
 console.log(obj1.__proto__ === obj2.__proto__)

 /**
  * Quando é criado um objeto a partir de uma função.
  * Esse novo objeto aponta para o prototype daquela função.
  * 
  */
  console.log(MeuObjeto.prototype === obj1.__proto__)

  MeuObjeto.prototype.nome = 'Anônimo'
  MeuObjeto.prototype.falar = function() {
      console.log(`Bom dia! Meu nome é ${this.nome}!`)
  }

  obj1.falar()
  obj2.nome = 'Rafael'
  obj2.falar()

  // Pode criar normalmente e atribuir o prototype da função
  const obj3 = {}
  obj3.__proto__ = MeuObjeto.prototype
  obj3.nome = 'Obj3'
  obj3.falar()

  // Resumindo a loucora...
  console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
  console.log(MeuObjeto.__proto__ === Function.prototype)
  console.log(Function.prototype.__proto__ === Object.prototype)
  console.log(Object.prototype.__proto__ === null)