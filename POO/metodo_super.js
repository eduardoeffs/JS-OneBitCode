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

class TransportSpaceship extends Spaceship  {
    constructor(name, maxCrew, recommendedVelocity, maxLoad) {
        super(name, maxCrew, recommendedVelocity)
        this.maxLoad = maxLoad
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let transportSpacesip = new TransportSpaceship("Transportadora", 4, 100, 400)
console.log(transportSpacesip)
transportSpacesip.speedUp(210)