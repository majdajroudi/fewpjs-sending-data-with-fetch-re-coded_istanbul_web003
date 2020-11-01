// Add your code here
const body= document.querySelector('#body');
const tag = document.createElement("p")
const text = document.createTextNode("Text")


function submitData(userName,userEmail){
    return fetch("http://localhost:3000/users",{
        method:"POST",
        url: "http://localhost:3000/users",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        console.log(object)
        const objectId = document.createElement("p")
        const name = document.createElement("p")
        name.innerText = object.name
        objectId.innerText = object.id
        body.append(objectId);
        body.appendChild(name)
        body.innerHTML += `<p>${object.id} </p>`
    })
    .catch(function(error){
        console.log(error.message);
        const errorMessage = document.createElement("p")
        const errorElement = document.createElement("p")
        console.log(errorElement)
        errorMessage.innerText = error.message
        errorElement.innerText = error
        body.appendChild(errorMessage)
        body.appendChild(errorElement)
        body.innerHTML += `<p>${error.message} </p>`
    })
}

window.addEventListener("load", function(e){
    // submitData("majd","majd@email.com")
})