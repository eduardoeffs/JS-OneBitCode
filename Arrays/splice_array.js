let naveEspacial = ["Juju", "Jausk", "Kammiv", "Pllaq"]
console.log(naveEspacial)

// da maneira abaixo, estou removendo os elementos 1 e 2 do array acima, e colocando os
// elementos a seguir no lugar, se eu simplesmente não adiconasse "Jozias..etc", ele iria
// apenas remover os elementos 1 e 2
 //let removedNaveEspacial = naveEspacial.splice(1,2, "Jozias", "Isiris", "Sharks")
// console.log(naveEspacial)


let extractedNames = naveEspacial.slice(0,2)
console.log(extractedNames)