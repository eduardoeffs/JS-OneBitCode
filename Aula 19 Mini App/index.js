let dataDeEntrada = prompt("Digite a data de partida: (DD/MM/YYYY)")

let dataDePartida = moment(dataDeEntrada, "DD/MM/YYYY")

let today = moment()

let dateDiif = today - dataDePartida

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiif / 1000)
    alert("Tempo de voo: " + secondsOfDeparture + " segundos.")
} else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiif / 1000 / 60)
    alert("Tempo de voo: " + minutesOfDeparture + " minutos.")
} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiif / 1000 / 3600)
    alert("Tempo de voo: " + hoursOfDeparture + " horas.")
} else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiif / 1000 / 3600 / 24)
    alert("Tempo de voo: " + daysOfDeparture + " dias.")
} else {
    alert("Opção inválida.")
}