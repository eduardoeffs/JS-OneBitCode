var nameSpaceship = prompt("Informe o nome da nave")
var characterChange = prompt("Qual caractere deseja substituir?")
var newCharacter = prompt("Por qual caractere deseja substituir?")

var newSpaceship = ""

for (let i = 0; i < nameSpaceship.length; i++) {
    if (nameSpaceship[i] == characterChange) {
        newSpaceship += newCharacter
    } else {
        newSpaceship += nameSpaceship[i]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)