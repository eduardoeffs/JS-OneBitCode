let nomePiloto = prompt("Qual o seu nome?")

let velocidade = 0

let newVelocidade = prompt("A que velocidade você deseja acelerar a nave?")

let velocidadeConfirmation = confirm("Estaremos colocando a nave á " + newVelocidade + "km/s, ok?")

if (newVelocidade <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
} else if (newVelocidade < 40){
    alert("Você está devagar, podemos aumentar mais")
} else if (newVelocidade >= 40 && newVelocidade <  80) {
    alert("Parece uma boa velocidade para manter.")
} else if (newVelocidade >= 80 && newVelocidade < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Tenha uma ótima viagem " + nomePiloto + ", você está viajando á " + newVelocidade + "km/s")