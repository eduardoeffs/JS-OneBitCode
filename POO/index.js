/* class spaciaStation {
    constructor(name, crewQuantity, isHitched, isOpen) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = isHitched
        this.isOpen = isOpen
    }
    engatarNave() {
        this.isHitched = false
        this.isOpen = true
    }
}

function realizarEngate() {
    this.spaciaStation.name = prompt("Qual o nome da nave?\n")
    this.spaciaStation.crewQuantity = prompt("Quantidade de tripulantes?")
    let engate = prompt("Você deseja desengatar a sua nave?")
        if(engate == "Sim" || "sim") {
            engatarNave()
        }
}

realizarEngate()


console.log(realizarEngate) */

class spacialStation {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.isOpen = false
    }
    engatarNave() {
        this.isHitched = true
        this.isOpen = true
    }
}

function createSpaceship(){
    let spaceshipName = prompt("Informe o nome da nave: ")
    let crewQuantity = prompt("Informe a quantidade de tripulantes: ")
    let spaceship = new spacialStation(spaceshipName, crewQuantity)
    return spaceship
}

function showMenu() {
    let chosenOption
    while(chosenOption != 1 && chosenOption != 2 && chosenOption !=3) {
        chosenOption = prompt("O que deseja fazer?\n" + 
                                "1 - Engatar nave.\n" + 
                                "2 - Imprimir naves.\n" +
                                "3 - Sair do programa.")
    }
    return chosenOption
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) =>{
        spaceshipList += (index + 1) + "-  " + spaceship.name + " (" + spaceship.crewQuantity +
                        " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

let chosenOption

while (chosenOption != 3) {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.engatarNave()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}