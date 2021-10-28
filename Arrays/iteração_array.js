let spaceship = ["Deméter", "Darwin", "Socrates", "Sharks", "Isurus"]


// forEach
spaceship.forEach(function(currentSpaceship, index){
    console.log("Nave: " + currentSpaceship + "\nÍndice: ",  + index)
})

// map
let upcasedSpaechip = spaceship.map(function(currentSpaceship, index){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
console.log(upcasedSpaechip)

// filter
let com7chars = spaceship.filter(function(element) {
    return element.length >=7
})
console.log(com7chars)

//find
let com6chars = spaceship.find(function(element) {
    return element.length >=6
})
console.log(com6chars)