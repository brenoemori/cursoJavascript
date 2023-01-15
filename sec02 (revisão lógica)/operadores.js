// + - * / % **

let n1 = 10;
let n2 = 5;


// OPERADORES ARITMÉTICOS
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

// OPERADORES DE ATRIBUIÇÃO
let n3 = 25;
//n3 = n3 + 15;
n3 += 2;
console.log(n3)


//INCREMENTO E DECREMENTO
let i = 0;

console.log(++i);

// COMPARAÇÃO
/*
    Igualdade de valor ==
    Igualdade de valor e tipo ===
    <, >, <=, >=
    != Valores diferentes
    !== Valores e tipos diferentes
*/ 

console.log(n1, n2, n3);
let n5 = "10";

console.log(n1 != '10');
console.log(n1 !== '10');

//  OPERADORES LÓGICOS
/*
    Para uma pessoa viajar para o exterior:
    - precisa ser maior de 18 anos
    OU
    - Acompanhado com os pais
    E 
    - Ter comprado o bilhete
*/ 

let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete; 

console.log(`Pode viajar: ${podeViajar}`);

n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);
console.log((3 * 2) ** 2);