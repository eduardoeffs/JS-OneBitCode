function sumNumbers () {
    let number = 1 + 1

    if(number == 2) {
        succesCallback()
    } else {
        errorCallback()
    }

    function succesCallback() {
        console.log("Yeah, it works!")
    }

    function errorCallback() {
        console.log("Oops, something went wrong!")
    }
}

sumNumbers()

//Now, with promises:

let p = new Promise ((resolve, reject) => {
    let number = 1 + 1
    if(number == 2){
        resolve("Sucess!")
    } else {
        reject("Failed!")
    }
})

p.then((message) => {
    console.log("This is in the then " + message)
}).catch((err) => {
    console.log("This is in the catch " + err)
})

const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data)

        return data.map(function(user) {
            let li = document.createElement('li')
            li.innerHTML = `${user.name} (${user.username})`  
            ul.appendChild(li)
        })
    })

    .catch((error) =>  {
        console.log("Oops! " + error)
    })