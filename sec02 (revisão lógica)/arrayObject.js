const nomes = ["Breno", "Maria", ""]
const pessoa = {nome: "Breno", idade: 10, email: ""}
const pessoa1 = {}

const pessoas =[{
    nome: "Breno",
    idade: 25
}, {
    nome: "Maria",
    idade: 28
}, {
    nome: "Helena",
    idade: 45
}, {
    nome: "joao",
    idade: 30
}, {
    nome: "Karen",
    idade: 26
}]

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}

