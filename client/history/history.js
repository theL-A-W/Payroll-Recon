//Date function -- made with the help of chatGPT
//PAST PAY DATES
const startDate = new Date('10/14/2023')
const initialDate = new Date('10/21/2023')
const numberOfDates = 10
const numOfDates = 1
function calculatePastDates(startDate, numberOfDates) {

      const pastDates = []
      let currentDate = new Date(startDate);
    
      for (let i = 0; i < numberOfDates; i++) {
        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
        pastDates.push(formattedDate);
        currentDate.setDate(currentDate.getDate() - 7)
      }

  return pastDates
}
const pastPayDays = calculatePastDates(startDate, numberOfDates)
console.log('Past paydays:', pastPayDays)

//NEXT PAY DAYS
function calculateNextDates(initialDate, numOfDates) {
      const nextDates = []
     
      let currentDate = new Date(initialDate)
    
      for (let i = 0; i < numOfDates; i++) {
        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`
        nextDates.push(formattedDate)
    
        // Add 7 days (one week) to the current date
        currentDate.setDate(currentDate.getDate() + 7)
      }

  return nextDates;
}
const nextPayDays = calculateNextDates(initialDate, numOfDates)
console.log('Next paydays:', nextPayDays)



//THIS IS A WORK IN PROGRESS---FUNCTION FOR CREATING WEEKLY PAY DUE
// if (date === '10/14/2023'|| '10/13/2023'|| '10/12/2023'|| '10/11/2023'|| '10/10/2023'|| '10/09/2023'|| '10/08/2023'){
//     console.log('this is a pay week')
// //pull data to add dayPay for all  of  these days
// } else

//GET RUNS
async function getRuns() {
  const response = await axios.get(`http://localhost:3001/runs`)
  return response.data
}
//GET PAYMENTS
async function getPayments() {
  const response = await axios.get(`http://localhost:3001/payments`)
  return response.data
}
//GET DRIVERS
async function getDrivers() {
  const response = await axios.get(`http://localhost:3001/drivers`)
  return response.data
}
//RETURN ALL RUNS, PAYMENTS, DRIVERS
async function yesRunsPayments() {

  const allRuns = await getRuns()
  console.log('All Runs', allRuns)

  const allDrivers = await getDrivers()
  console.log('All Drivers', allDrivers)

  const allPayments = await getPayments()
  console.log('All Payments', allPayments)

  // enterBtn.addEventListener("click", () => {
  allPayments.forEach(payment => {
        let mainBox = document.getElementById('mainBox')
        let pastWeek = document.createElement('div')
        pastWeek.id = ('pastWeek')
        mainBox.appendChild(pastWeek)
        let pastTotals = document.createElement('div')
        pastTotals.id = 'pastTotals'
        pastWeek.appendChild(pastTotals)
        pastTotals.innerHTML = `
        <p id="block"><br id="value">Name:</br>${payment.emp_name}</p>
        <p id="block"> <br id="value">Earned:</br>$${payment.totalAmount}</p>
        <p id="block"> <br id="value"> On date:</br>${payment.week_ending}</p>`
     
  

  })
 

//   //CREATE A PAY PERIOD AND ASSIGN EACH RUN TO A PAY PERIOD
const payPeriods = []
for (let i = 0; i < pastPayDays.length; i++) {
  const payWeekEnd = new Date(pastPayDays[i])


  const payWeekStart = new Date(payWeekEnd)
  payWeekStart.setDate(payWeekStart.getDate() - 6)

  payPeriods.push({
    start: payWeekStart,
    end: payWeekEnd,
  })
}

const runsByPayPeriod = {}

allRuns.forEach(run => {
  const runDate = new Date(run.date)
  let assignedToPayPeriod = false

  for (let i = 0; i < payPeriods.length; i++) {
    const payPeriod = payPeriods[i]

    if (runDate >= payPeriod.start && runDate <= payPeriod.end) {
      const payPeriodKey = `Week ${i + 1}`
      
      if (!runsByPayPeriod[payPeriodKey]) {
        runsByPayPeriod[payPeriodKey] = []
      }
      console.log(payPeriodKey)
      runsByPayPeriod[payPeriodKey].push(run)


enterBtn.addEventListener("click", () => {
        
        const emp_name = run.emp_name
        const baseFare = run.baseFare
        const surcharge = run.surcharge
        const bags = run.bags
        const gratuity = run.gratuity
        const waiting = run.waiting
        const date = run.date
        const resId = run.resId
        const nameInput = document.getElementById('nameInput').value
        const enterBtn = document.getElementById('enterBtn')
    
        if (nameInput == emp_name){
        let runPay  = (baseFare * 0.25) + surcharge + (bags * 0.25) + gratuity + (waiting * 0.25)
        let mainBox = document.getElementById('mainBox')
        let pastWeek = document.createElement('div')
        pastWeek.id = ('pastWeek')
        mainBox.appendChild(pastWeek)
        let payByRun = document.createElement('div')
        payByRun.id = 'payByRun'
        pastWeek.appendChild(payByRun)
        payByRun.innerHTML = `
        <p id="block"><br id="value">Driver:</br>${run.emp_name}</p>
        <p id="block"><br id="value">Run date:</br>${run.date}</p>
        <p id="block"> <br id="value">Was paid:</br>$${runPay}</p>
        <p id="block"> <br id="value"> On date:</br>${payPeriod.end}</p>`
        // let payByWeek = document.createElement('div')
        // payByWeek.id = 'payByWeek'
        // pastWeek.appendChild(payByWeek)
        // payByWeek.innerHTML = `
        // <p id="block"><br id="value">Driver:</br>${run.emp_name}</p>
        // <p id="block"> <br id="value">Was paid:</br>$${weekPay}</p>
        // <p id="block"> <br id="value"> On date:</br>${payPeriod.end}</p>`

      } else {
        console.log('This is not a driver')
      }
    })
     
      // console.log(`run on date: ${run.date}, was paid on date ${payPeriod.end}`)
      assignedToPayPeriod = true
      break
    }
  }

  if (!assignedToPayPeriod) {
    console.log(`Run on ${run.date} is not within any pay period.`)
  }
})


console.log('Runs by Pay Period:', runsByPayPeriod)




}
yesRunsPayments()
