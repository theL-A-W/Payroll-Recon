const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", () => {
const baseFare = parseFloat(document.getElementById('bfInput').value) || 0
const surcharge = parseFloat(document.getElementById('surchargeInput').value) || 0
const bags = parseFloat(document.getElementById('bagsInput').value) || 0
const gratuity = parseFloat(document.getElementById('gratuityInput').value)|| 0
const waiting = parseFloat(document.getElementById('waitingInput').value) || 0
const date = (document.getElementById('dateInput').value)
const resId = (document.getElementById('res-id').value)
const runTotalElement = document.getElementById('runTotal')



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

 

    runTotal.innerHTML = ""

//computing inputs and creating a run
    if(date === ""){
        alert("The 'date' field must be filled in before continuing.")
    }else{

        let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)
        console.log('You Earned:', runPay, 'For Run:', resId)
        console.log("Store this data!")


        const runTotal = document.createElement('p')
        console.log("created element")
        runTotal.id = `Run${allRuns.length + 1}`
        console.log(runTotal.id)
        runTotal.innerHTML = 
        `<p class="allText" ><p id="runNumber" >${runTotal.id}</p> 
        <br><p id="category"> You earned:</p><p id="description">$ ${runPay}</p></br>
        <br><p id="category"> For Run:</p><p id="description"> ${resId}</p> </br>
        <br><p id="category"> On date:</p><p id="description"> ${date}</p></br></p>`
        console.log(runTotal.innerHTML)
        runTotalElement.appendChild(runTotal)
        bfInput.value = ""
        surchargeInput.value = ""
        bagsInput.value = ""
        gratuityInput.value = ""
        waitingInput.value = ""
        document.getElementById('res-id').value = ""
        dateInput.value = ""




             //function to add item to the database goes here
    }

    



}
yes()
//create run here using inputted information



})

//not working... goal is placeholder $__.__ and no more than three numbers before the decimal... only works with arrows now
const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        const value = `$ ${i}${i}.${i}${i}`;
        inputs[i].setAttribute('placeholder', value);
    });
}










