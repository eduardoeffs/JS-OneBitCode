// método set

class Spaceship {
    constructor (name) {
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new Spaceship("Navezin")

spaceship.velocity = 130
console.log(spaceship)

//método get

class ResourceProcessStation {
    constructor(name, montlyProcessedLoad) {
        this.name = name
        this.montlyProcessedLoad = montlyProcessedLoad
    }
    get weklyProcessedLoad() {
        return this.montlyProcessedLoad / 4
    } 
}

let resourceProcessor = new ResourceProcessStation("Jubily", 500)

console.log(resourceProcessor.weklyProcessedLoad)