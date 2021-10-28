let spaceShip = ["Colossus", "Elemental", "Henry"]

console.log(spaceShip)

// função push faz com que você adicione um elemento no final do array
spaceShip.push("Isurus")
console.log(spaceShip)

// já a função pop, remove o último elemento do array
spaceShip.pop()
console.log(spaceShip)

//a função shift, remove o primeiro elemento do array
spaceShip.shift()
console.log(spaceShip)

//adiciona o elemento escrito na primeira posição
spaceShip.unshift("Fenix")
console.log(spaceShip)

let henryPos = spaceShip.indexOf("Henry")
console.log(henryPos)