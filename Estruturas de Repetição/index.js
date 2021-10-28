/* let velocidade = 50
let aceleration = 5

while(velocidade<= 100) {
    console.log("Acelerando: Estamos a " + velocidade + "km/s")
    velocidade = velocidade + aceleration
} */

let constellation = "Andromeda"
let pos = 0
let constellationLenght = constellation.length

while(pos < constellationLenght) {
    if(constellation[pos] == "a" || constellation[pos] == "A") {
        console.log(pos)
    }
    pos = pos + 1
}