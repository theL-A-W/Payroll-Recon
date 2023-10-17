
// //messaging in socket.io
// import io from 'socket.io-client'
// const socket = io("http://localhost:3001")





const loginButton = document.querySelector('#login-btn')
const hiddenLogin = document.querySelector('.hidden')
const closeButton = document.querySelector('.close-modal')

loginButton.addEventListener("click", () => {
    hiddenLogin.style.display = "block"
})
closeButton.addEventListener("click", () => {
    hiddenLogin.style.display = "none"
})

enter.onclick = async() => {
allDrivers = await getAllDrivers()
    if(username === emp_email && password === emp_password){
        console.log("you are in!")
    }else {
        alert("Username and or password are incorrect. Please try again")
    }
}






//messaging app socket.io
const button = document.getElementById("sendBtn")
const input = document.getElementById('messageInput')

button.addEventListener("click", () => {
    socket.emit("message", input.value)
})
