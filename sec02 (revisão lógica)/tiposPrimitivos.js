// strings, number (int, floats), boolean, null e undefined, symbol (ES6)

let minhaVar = 'minha string';
let minhavar1 = "minha 'string' com aspas simples";
let minhavar3 = `minha template literal`;

let idade = 25;
let msg = `Eu possuo ${idade} anos`

console.log(msg)
console.log("Hello " + "World")
console.log(typeof msg, typeof idade, typeof minhaVar, " -- ", 20)

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = false;
console.log(`isValid : ${isValid} e é do tipo ${typeof isValid}` );


//undefined pois ainda não foi declarada
let varTeste 
console.log(varTeste)
console.log(typeof varTeste)
//Atribuindo valor
varTeste = 10
console.log(typeof varTeste, varTeste)

//null é declarado um tipo de Objeto pois há um erro antigo e para não quebrar o código ele ainda perdurece
let varTeste2 = null;
console.log(typeof varTeste2, varTeste2)