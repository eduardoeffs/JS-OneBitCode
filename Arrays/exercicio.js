const spaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Jacuzy", 15, false]
]

let with9persons = spaceships.filter(element => {
    return element[1] > 9
}).map(element => {
    return element[0] 
})

let engatePendente = spaceships.findIndex(element => {
    return element[2] == false
})

let caixaAlta = spaceships.map(element => {
    return element[0].toUpperCase()
})

let message  = "Naves com mais de 9 tripulantes: " + with9persons.join(", ")
message = message + "\nPlataforma com processo de engate: " + (engatePendente + 1)
message = message + "\nNaves destacadas: " + caixaAlta.join(", ")

alert(message)