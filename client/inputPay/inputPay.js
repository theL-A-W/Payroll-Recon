
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", () => {
const emp_name = document.getElementById('emp-name-input').value
const baseFare = parseFloat(document.getElementById('bfInput').value) || 0
const surcharge = parseFloat(document.getElementById('surchargeInput').value) || 0
const bags = parseFloat(document.getElementById('bagsInput').value) || 0
const gratuity = parseFloat(document.getElementById('gratuityInput').value)|| 0
const waiting = parseFloat(document.getElementById('waitingInput').value) || 0
const date = (document.getElementById('dateInput').value)
const resId = (document.getElementById('res-id').value)






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



        const runTotalElement = document.getElementById('runTotal')
        const runTotal = document.createElement('p')
        console.log("created element")
        // runTotal.id = `Run${allRuns.length + 1}`
        // console.log(runTotal.id)
        runTotal.innerHTML = 
        `<p class="allText" ><p id="runNumber" >${emp_name}</p> 
        <br><p id="category"> You earned:</p><p id="description">$ ${runPay}</p></br>
        <br><p id="category"> For Run:</p><p id="description"> ${resId}</p> </br>
        <br><p id="category"> On date:</p><p id="description"> ${date}</p></br></p>`
        console.log(runTotal.innerHTML)




        //POSTING RUNS
const localHost = 'http://localhost:3001/'
const addNewRun = async () => { await axios.post(`${localHost}runs`, { emp_name: emp_name, baseFare: baseFare, surcharge: surcharge, bags: bags, gratuity: gratuity, waiting: waiting, date:date, resId: resId })
const displayContainer = document.getElementById('recentSubmits')
    let newRun = document.createElement('div')
    newRun.id = 'newRunDiv'
    newRun.innerHTML = `<p id="block">${emp_name}</p><p id="block">Run ID: ${resId}</p><p id="block"> Pay: $${runPay}</p><p id="block"> Date: ${date}</p><button id="edit"><i class="fa-regular fa-pen-to-square"  style="color: #e5cfa9;"></i></button><button id="deleteBtn"><i class="fa-solid fa-trash-can" style="color: #e5cfa9;"></i></button></p>`
    displayContainer.appendChild(newRun)
    
    console.log(addNewRun)
}
addNewRun()

        //DELETE RUNS
   
    deleteBtn.addEventListener("click", () => {
        const deleteRun = async () => { await axios.delete(`${localHost}runs`, { emp_name: emp_name, baseFare: baseFare, surcharge: surcharge, bags: bags, gratuity: gratuity, waiting: waiting, date:date, resId: resId })

            console.log(addNewRun)
        }
        deleteRun()
    })
   
        


        runTotalElement.appendChild(runTotal)
        document.getElementById('emp-name-input').value = ""
        bfInput.value = ""
        surchargeInput.value = ""
        bagsInput.value = ""
        gratuityInput.value = ""
        waitingInput.value = ""
        document.getElementById('res-id').value = ""
        dateInput.value = ""

    }


}
yes()
})






//Start of diaplaying runs, with lots of redundant data
const emp_name = parseFloat(document.getElementById('emp-name-input').value)
const baseFare = parseFloat(document.getElementById('bfInput').value) || 0
const surcharge = parseFloat(document.getElementById('surchargeInput').value) || 0
const bags = parseFloat(document.getElementById('bagsInput').value) || 0
const gratuity = parseFloat(document.getElementById('gratuityInput').value)|| 0
const waiting = parseFloat(document.getElementById('waitingInput').value) || 0
const date = (document.getElementById('dateInput').value)
const resId = (document.getElementById('res-id').value)






//Displays Runs

async function getRuns() {
    const response = await axios.get(`http://localhost:3001/runs`)
    return response.data
}

async function displayRuns() {

    allRuns = await getRuns()
    console.log(allRuns)
    const displayContainer = document.getElementById('recentSubmits')
    const showRun = document.getElementById('showRun')
   
    // displayContainer.innerHTML = ""

    

   
    allRuns.forEach(run => {
        console.log(run)
        const emp_name = run.emp_name
        const baseFare = run.baseFare
        const surcharge = run.surcharge
        const bags = run.bags
        const gratuity = run.gratuity
        const waiting = run.waiting
        const date = run.date
        const resId = run.redId

        const runTotalElement = document.getElementById('runTotal')
        const runTotal = document.createElement('p')


        let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)
        console.log('You Earned:', runPay, 'For Run:', resId)

   
      const runDiv = document.createElement('div')
      runDiv.id = 'runDiv'
     displayContainer.appendChild(runDiv)
        // let runDiv = document.getElementById('showRun1')
  
        runDiv.innerHTML =  
        `<p id="block">${run.emp_name}</p><p id="block">Run ID: ${run.resId}</p><p id="block"> Pay: $${runPay}</p><p id="block"> Date: ${run.date}</p><button id="edit"><i class="fa-regular fa-pen-to-square"  style="color: #e5cfa9;"></i></button><button id="delete"><i class="fa-solid fa-trash-can" style="color: #e5cfa9;"></i></button></p>`

    })
}

displayRuns()




