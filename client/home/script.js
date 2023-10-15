


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
    }
}



