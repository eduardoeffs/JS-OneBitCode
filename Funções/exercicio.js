let novaVelocidade
let velocidade = 0
let condicao = true

let nome = prompt("Digite o nome da nave")

while (condicao) {
    let escolha = prompt(" 1 - Acelerar 5\n 2 - Desacelerar 5\n 3 - Imprimir resultado\n 4 - Sair")

    if (escolha == 1) {
        velocityPlus()
    } else if (escolha == 2) {
        velocityDowngrade()
    } else if (escolha == 3) {
        printData()
        break;
    } else if (escolha == 4){
        alert("Você desceu da nave, espero que tenha gostado da expêriencia")
        break;
    } else {
        alert("Digite um número válido!")
    }
    
}

function velocityPlus() {
    velocidade += 5
    novaVelocidade = velocidade;

    return novaVelocidade;
}

function velocityDowngrade() {
    velocidade -= 5
    novaVelocidade = velocidade;
    if (novaVelocidade < 0) {
        novaVelocidade = 0;
    }

    return novaVelocidade;
}

function printData() {
    alert(` O nome da nave é ${nome} e a velocidade atual é ${novaVelocidade}`)
}