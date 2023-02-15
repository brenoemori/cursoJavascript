function alteraArray(arr){
    arr.push("adicionado")
}

let a = ["a"]

console.log(a)
alteraArray(a)
console.log(a)


function alteraPrimitivo(p) {//mensagem
    p += " adicionado"
    console.log("dentro da funcao: ", p)
}

let msg = "mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)