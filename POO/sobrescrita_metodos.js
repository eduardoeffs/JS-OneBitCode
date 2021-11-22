class Spaceship {
    constructor(name, maxCrew, recommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.recommendedVelocity = recommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.recommendedVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nDiminuia ou irá provocar danos à nave.")
        }
    }
}

class TransportSpaceship extends Spaceship{
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += +1
    }
}

let transportSpacesip = new TransportSpaceship("Transportadora", 7, 100)
transportSpacesip.speedUp()

//chamando o speedUp da maneira acima, ele executa o que está reescrito na própria classe.