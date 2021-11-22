class Spaceship {
    constructor(name, maxCrew, recommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.recommendedVelocity = recommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.recommendedVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA! \nDiminua ou provocará danos à nave.")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha.")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostras e parando nave de descoberta.")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 25, 130)

darwin.speedUp(210)