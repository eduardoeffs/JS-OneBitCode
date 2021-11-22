function show() {
    let element = document.getElementById("name")
    console.log(element.value)
}

function show() {
    let element = document.getElementsByName("phone")
    console.log(element.value)
}

function show() {
    let element = document.querySelectorAll("div#phones input[name = 'phone']")
    console.log(element.value)
}