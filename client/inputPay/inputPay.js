const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", () => {
const baseFare = parseFloat(document.getElementById('bfInput').value) || 0
const surcharge = parseFloat(document.getElementById('surchargeInput').value) || 0
const bags = parseFloat(document.getElementById('bagsInput').value) || 0
const gratuity = parseFloat(document.getElementById('gratuityInput').value)|| 0
const waiting = parseFloat(document.getElementById('waitingInput').value) || 0
const date = (document.getElementById('dateInput').value)
const resId = (document.getElementById('res-id').value)
const runTotal = (document.getElementById('runTotal').value)


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
    allDrivers = await getDrivers()
    console.log(allDrivers)

    allRuns = await getRuns()
    console.log(allRuns)

    allPayments = await getPayments()
    console.log(allPayments)

}
yes()




if(date === ""){
    alert("The 'date' field must be filled in before continuing.")
}else{

    let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)
    console.log('You Earned:', runPay, 'For Run:', resId)
    console.log("Store this data!")

    for (i = 0;  i < allRuns.lenth; i++) {
        let runTotal = document.createElement('div')
        runTotal.id =  `run${i+1}`
        runTotal.innerHTML = `<p>You earned:, ${runPay}, For Run:, ${resId}, On date:, ${date} </p>`
    }
}


})

//not working... goal is placeholder $__.__ and no more than three numbers before the decimal... only works with arrows now
const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        const value = `$ ${i}${i}.${i}${i}`;
        inputs[i].setAttribute('placeholder', value);
    });
}










