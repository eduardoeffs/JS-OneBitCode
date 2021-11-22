// todo objeto é criado a partir de uma classe  
class spaceship{

}
let mySpaceship = new spaceship()

// construtores e instâncias

class SpacialStation {
    constructor(name, plataformas) {
        this.name = name
        this.plataformas = plataformas
    }
}

let observatory = new SpacialStation("Observatório", 40)
console.log(observatory)

class naveEspacial {
    constructor(myName, type = "testada em campo") {
        this.name = myName
        this.type = type
    }
}

let jozias = new naveEspacial("Jozias")
let golias = new naveEspacial("Golias", "batalha")

console.log(jozias)
console.log(golias)

