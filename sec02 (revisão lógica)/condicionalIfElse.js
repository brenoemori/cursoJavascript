let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

/*
let msgMaiorIdade = "";
if(idade >= 18){
    msgMaiorIdade = "É maior de idade"
} else{
    msgMaiorIdade = "É menor de 18 anos"
}
console.log(msgMaiorIdade)
*/

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos";



if(!comprouBilhete){
    console.log("Não comprou o Bilhete")

} else{
    if(idade >= 18){
        console.log("É maior de idade, pode viajar")
    }else{
        if(paisPresentes){
            console.log(`${msgMaiorIdade} acompanhado dos pais: VIAGEM LIBERADA`)
        } else{
            console.log(`Opa!! ${msgMaiorIdade} sem acompanhamento dos pais: !VIAGEM NEGADA!`)
        }
    }
}


//  Exemplo 2

let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`Media: ${media}`);

if(n1 === 0 || n2 === 0) {
    console.log(`REPROVADO`)
} else if(media < 7){
    console.log(`REPROVADO. Mas há como recuperar`)
} else {
    console.log(`APROVADO!`)
}