// Aninhando Objetos, objetos dentro de arrays, arrays dentro de objetos, objetos dentro de objetos.

let spaceship = {
    name: "Elemental",
    type: "LayDown",
    crew: ["Cap", "Coronel", "Tenente", "Jozias"]
}

//acrescente mais um tripulante:
spaceship.crew.push("JujuSali")
console.log(spaceship)

///
let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 12},
    {name: "Golias", crewQuantity: 14}
]
console.log(spaceships[0].name)
spaceships.forEach(spaceship => {
    alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes.")
})

///objeto dentro de outro objeto
let newNave = {
    nome: "Jozias",
    maxCrew: 20,
    captain: {
        nome: "Nascimento",
        age: 38
    }
}

console.log(newNave.captain.age)