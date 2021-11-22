class Captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours)
    }
}

let spaceship = new Spaceship("Lizzuz", 13, "Nascimento", 45, 1200)

console.log(spaceship)
