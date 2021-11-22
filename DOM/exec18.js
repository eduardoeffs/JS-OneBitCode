function saveHouse() {
    let area = document.getElementById("area").value
    let number = document.getElementById("number").value
    let neighborhood = document.getElementById("neighborhood").value
    let city = document.getElementById("city").value

    let newListValue = document.createElement("li")
    newListValue.innerText = area  + "m2, número " + number + "  (" + neighborhood +
    " - " + city + ")"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}