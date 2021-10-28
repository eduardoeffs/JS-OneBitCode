//métodos e atributos

let spaceship = {
    name: "Elemental",
    type: "Aviação",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando Nave.")
        alert("Ligando computador.")
    }
}

spaceship.velocity = 0

spaceship.speedUp = function(aceleration) {
    this.velocity = this.velocity + aceleration
}

console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)