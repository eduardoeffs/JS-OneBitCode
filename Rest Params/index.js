function greetCrew(message, names) {
    names.forEach(names => console.log(`${message}, ${names}`))
}

greetCrew("Seja bem vindo", ["Arthur", "Melissa", "Zezin"])

function greetCrew(message, ...names) {
    names.forEach(names => console.log(`${message}, ${names}`))
}

greetCrew("Seja bem vindo", "Arthur", "Melissa", "Zezin")

//Rest Param sempre precisa vir no final de uma função