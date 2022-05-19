let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(acceleration > 0) {
                velocity=  velocity + acceleration* 2
                console.log("Nova velocidade: " + velocity)
                resolve(velocity)
            } else {
                console.log("Aceleração Inválida.")
                reject("Não possui aceleração")
            }
        }, 1200)
    }) 
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
.then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois da aceleração:\n" , komodoShip)
}).catch(message => {
    console.log("Komodo: " + message)
})

console.log("Execução de Promises")
console.log(komodoShip)