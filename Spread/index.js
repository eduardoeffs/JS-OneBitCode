let spaceships = ["Colossus", "Artemis", "Fenix"]

console.log(...spaceships)

function speedUp (velocity, acceleratio) {
    return velocity + acceleratio
}

let spaceAceleration = [60,10]

let newVelocity = speedUp(...spaceAceleration)

console.log(newVelocity)