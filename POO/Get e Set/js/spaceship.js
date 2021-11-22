class Spaceship {
    static get decelaration_rate() {
        return 0.17
    }
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
    }
    speedUp(accelerate) {
        this.currentVelocity += (accelerate *(1 - Spaceship.decelaration_rate))
    }
}