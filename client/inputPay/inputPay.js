const baseFare = document.getElementById('bfInput')
const surcharge = document.getElementById('surchargeInput')
const bags = document.getElementById('bagsInput')
const gratuity = document.getElementById('gratuityInput')
const waiting = document.getElementById('waitingInput')
const other = document.getElementById('otherInput')
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", () => {
    if(
        baseFare === "" || 
        surcharge === "" ||  
        bags === "" || 
        gratuity === "" || 
        waiting === "" || 
        other === ""
        ){
        alert("All fields must be filled in")
        console.log("All fields must be filled in")
    }else {
        console.log("Store this data!")
    }
})

