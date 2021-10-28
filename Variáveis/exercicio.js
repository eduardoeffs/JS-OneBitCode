alert("Bem vindo! A seguir, pediremos que informe alguns dados!")

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

let idadeConfirmation = confirm("Sua idade é igual a "+ idade + "?")

alert("Nome: " +nome + "\nIdade: " + idade + " anos" + "\nIdade Confirmada: " + idadeConfirmation)