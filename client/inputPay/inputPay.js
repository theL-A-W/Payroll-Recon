const baseFare = document.getElementById('bfInput').value
const surcharge = document.getElementById('surchargeInput').value
const bags = document.getElementById('bagsInput').value
const gratuity = document.getElementById('gratuityInput').value
const waiting = document.getElementById('waitingInput').value
const other = document.getElementById('otherInput').value
const submitBtn = document.getElementById('submit-btn')




const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        const value = `$ ${i}${i}.${i}${i}`;
        inputs[i].setAttribute('placeholder', value);
    });
}





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

