console.log('working')

const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener("click", () => {
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


           
  

    }

    



}
yes()




})




//Start of diaplaying runs, with lots of redundant data
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
        const baseFare = run.baseFare
        const surcharge = run.surcharge
        const bags = run.bags
        const gratuity = run.gratuity
        const waiting = run.waiting
        const date = run.date
        const resId = run.redId

        const runTotalElement = document.getElementById('runTotal')
        const runTotal = document.createElement('p')

        for(i=0;i < allRuns.length; i++){
            allRuns = [i+1]
        }
        runTotal.id = `Run${allRuns}`
        console.log(runTotal.id)

        let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)
        console.log('You Earned:', runPay, 'For Run:', resId)
        console.log("Store this data!")

   
      const runs = document.createElement('div')
     
        let runDiv =document.getElementById('showRun1')
       
        runDiv.innerHTML =  
        `<p id="block">${runTotal.id}</p><p id="block">Run ID: ${run.resId}</p><p id="block"> Pay: ${runPay}</p><p id="block"> Date: ${run.date}</p><button id="edit"><i class="fa-regular fa-pen-to-square"  style="color: #e5cfa9;"></i></button><button id="delete"><i class="fa-solid fa-trash-can" style="color: #e5cfa9;"></i></button></p>`
        for (i=0; i < allRuns.length; i++){
            console.log(allRuns)
        }
    })
}

displayRuns()







//////THIS WORKS!!!////

// //Displays Runs
// async function getRuns() {
//     const response = await axios.get(`http://localhost:3001/runs`)
//     return response.data
// }

// async function displayRuns() {

//     allRuns = await getRuns()
//     console.log(allRuns)
//     const displayContainer = document.getElementById('recentSubmits')
//     const showRun = document.getElementById('showRun')
   
//     // displayContainer.innerHTML = ""
  
//     allRuns.forEach(run => {
//         console.log(run)
//         const baseFare = parseFloat(document.getElementById('bfInput').value) || 0
//         const surcharge = parseFloat(document.getElementById('surchargeInput').value) || 0
//         const bags = parseFloat(document.getElementById('bagsInput').value) || 0
//         const gratuity = parseFloat(document.getElementById('gratuityInput').value)|| 0
//         const waiting = parseFloat(document.getElementById('waitingInput').value) || 0
//         const date = (document.getElementById('dateInput').value)
//         const resId = (document.getElementById('res-id').value)


//         let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)

//         const runTotalElement = document.getElementById('runTotal')
//         const runTotal = document.createElement('p')

//         runTotal.id = `Run${allRuns.length + 1}`

//       const runs = document.createElement('div')
//         let runDiv =document.getElementById('showRun1')
//         runDiv.innerHTML =  `<p>Run ID: ${runTotal.id}, Res. Number: ${resId}Pay: ${runPay}, Date: ${run.date}</p><button id="edit"><i class="fa-regular fa-pen-to-square"  style="color: #e5cfa9;"></i></button><button id="delete"><i class="fa-solid fa-trash-can" style="color: #e5cfa9;"></i></button>`


     
//     })
// }
// displayRuns()


  
  
  
  
  
  

            //Push data to "run" div
    // allRuns.push(runPay)
    // const runs = document.getElementsByClassName('runs')
    // runs.innerHTML = (runTotal.innerHTML)
    // console.log(runs.innerHTML)


// if(runPay){
//         async function createRuns() {
//             const runs = document.getElementsByClassName('runs')

//             try {
//                 await axios.post(localHost, [
//                     { baseFare: baseFare },
//                     { surcharge: surcharge },
//                     { bags: bags },
//                     { gratuity: gratuity },
//                     { resId: resId },
//                     { date: date },
//                 ])
//                 loadItems()
//             } catch(error) {
//                 console.error('Error adding item', error)
//         }
//         }
// }else {
//     console.log('Dont store data')
// }




    

//add run# to run collection
        // fetch("http://localhost:3001/runs", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //         body: JSON.stringify(runPay)
        //     })
        //     .then((response) => response.json())
        //     .then(data => {
        //     console.log('Run created:', data)
    
        // })
        // .catch(error => console.error('Error:', error))

  


// //Reading data
// const localHostRuns = 'http://localhost:3001/runs'
// const runData = document.getElementsByClassName('runs')
// async function getRuns(e) {
//     e.preventDefault()
//     const res = await fetch(localHostRuns, 
//     {
//         method: 'GET'
//     })
//     console.log(res)
//     const data = await res.json()
//     runData.value = data.runs
// }


// //Posting data
// const localHostRuns = 'http://localhost:3001/runs'
// const runData = document.getElementsByClassName('runs')
// submitBtn.addEventListener("click", getRuns)
// async function getRuns(e) {
//     e.preventDefault()
//     const res = await fetch(localHostRuns, 
//     {
//         method: 'POST'
//     })
//     console.log(res)
//     const data = await res.json()
//     runData.value = data.runs
// }
