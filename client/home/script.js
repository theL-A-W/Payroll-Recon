
// //messaging in socket.io
// import io from 'socket.io-client'
// const socket = io("http://localhost:3001")

const sendBtn = document.getElementById('sendBtn')
sendBtn.addEventListener("click",  () => { window.open(`mailto:lindsay@bedriven.com?subject=payroll%20Question&body=${messageInput.value}`)

})



document.addEventListener('DOMContentLoaded', () => {
   


const loginButton = document.querySelector('#login-btn')
const hiddenLogin = document.querySelector('.hidden')
const closeButton = document.querySelector('.close-modal')
const enter = document.getElementById('enter')


loginButton.addEventListener("click", () => {
    hiddenLogin.style.display = "block"
})
closeButton.addEventListener("click", () => {
    hiddenLogin.style.display = "none"
})



  //event listener isnt being called.
enter.addEventListener("click",  () => {
    async function getDrivers() {
        const response = await axios.get(`http://localhost:3001/drivers`)
        return response.data
    }
    async function getRuns() {
        const response = await axios.get(`http://localhost:3001/runs`)
        return response.data
    }
    async function getPayments() {
        const response = await axios.get(`http://localhost:3001/payments`)
        return response.data
    }



    async function yes() {
        const allDrivers = await getDrivers()
        console.log(allDrivers)

        const allRuns = await getRuns()
        console.log(allRuns)

        const allPayments = await getPayments()
        console.log(allPayments)


            console.log("this works")
            const username = document.getElementById('username').value
            const password = document.getElementById('password').value
            

            allDrivers = await getDrivers()

            // const foundDriver = allDrivers.find(driver => driver.emp_email === username && driver.emp_pass === password)

 
        // if (foundDriver){
        //         console.log("you are in!")
        //         hiddenLogin.style.display = "none"
        //     }else {
        //         alert("Username and or password are incorrect. Please try again")
        //     }

        enter.addEventListener("click", () => {
            allDrivers.forEach((driver) =>{
            if (username.value === driver.emp_name && password.value === driver.emp_pass) {
                console.log('you are in')
            }else{
                console.log('try again')
            }
        })
    })

    yes()
    }
})
// })





// //messaging app socket.io
// const button = document.getElementById("sendBtn")
// const input = document.getElementById('messageInput')

// button.addEventListener("click", () => {
//     socket.emit("message", input.value)
// })





})