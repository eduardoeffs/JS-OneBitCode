let nomeAeronave = prompt("Dê um nome para a sua Aeronave:")

let entrarEmDobra = prompt("Você deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

let totalDeDobras = 0

while(entrarEmDobra == "Sim" || entrarEmDobra == "sim") {
    entrarEmDobra = prompt("Dobra realizada! Você deseja realizar outra dobra?\n1 - Sim\n2 - Não")
    totalDeDobras = totalDeDobras + 1
}

alert("Obrigado por viajar na nave " + nomeAeronave + ", o total de dobras foi de " + totalDeDobras)