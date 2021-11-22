class spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(accelerarion) {
        this.velocity += accelerarion
    }
}
    let artemis = new spaceship("Ártemis")

    console.log(artemis)

    artemis.speedUp(10)
    artemis.speedUp(15)

    console.log(artemis)