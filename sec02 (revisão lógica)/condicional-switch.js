let diaSemana = 5
switch (diaSemana) {
    case 0:
        dia = "Domingo"
        break;
    case 1:
        dia = "Segunda"
        break;
    case 2:
        dia = "Terça"
        break;
    case 3:
        dia = "Quarta"
        break;
    case 4:
        dia = "Quinta"
        break;
    case 5:
        dia = "Sexta"
        break;
    case 6:
        dia = "Sábado"
    default:
        console.log("Valor inválido")
        break;
}

console.log(`Hoje é ${dia}`)