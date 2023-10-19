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
        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
        pastDates.push(formattedDate);
    
        // Add 7 days (one week) to the current date
        currentDate.setDate(currentDate.getDate() - 7);
      }

  return pastDates;
}
const pastPayDays = calculatePastDates(startDate, numberOfDates);
console.log('Past paydays:', pastPayDays);

//NEXT PAY DAYS
function calculateNextDates(initialDate, numOfDates) {
      const nextDates = []
     
      let currentDate = new Date(initialDate);
    
      for (let i = 0; i < numOfDates; i++) {
        const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
        nextDates.push(formattedDate);
    
        // Add 7 days (one week) to the current date
        currentDate.setDate(currentDate.getDate() + 7);
      }

  return nextDates;
}
const nextPayDays = calculateNextDates(initialDate, numOfDates);
console.log('Next paydays:', nextPayDays);



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
//RETURN ALL RUNS AND PAYMENTS
async function yesRunsPayments() {

  const allRuns = await getRuns()
  console.log('All Runs', allRuns)

  const allPayments = await getPayments()
  console.log('All Payments', allPayments)

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

forEach(driver => {
  //find all dates 7 days prior
  //if date is 1 day prior to W/E, it is a friday, if it is 2 days prior on the numerical calendar, it is a thursday, etc.
  //add all runTotals that are 7 days prior to the Week-Ending date
//display total for each day
//if day has no total, default pay to zero for that day
  //post runTotal and driver name to "payments"
})


//filter by driver









//CREATE TOTAL AMOUNTS FOR PAYMENTS FROM RUNS DATA
// for(i=0; i < allRuns.length; i++){
// if (allRuns.date = pastDates || nextDates){
//   console.log('subtract 7 days and add totals')
// } else {
//   console.log('there is nobody to pay this week')
// }
// }

}
yesRunsPayments()







  //   //GET PAYMENTS
  // async function paymentsDisplayed{
  //     const localHost = 'http://localhost:3001/'
  //     // const displayPayments = async () => {
  //       await axios.get(`${localHost}payments`, { emp_name: payments.emp_name.value, week_ending: payments.week_ending.value, totalAmount: payments.totalAmount.value, reimbursements: payments.reimbursements.value })
  //       let pastWeek = document.getElementById('pastWeek')
  //       let pay = document.createElement('div')
  //       pay.innerHTML = `
  //       <p id="block">${sunday}</p>
  //       <p id="block">Earned: $${monday}</p>
  //       <p id="block"> On date: ${tuesday}</p>`
  //       pastWeek.appendChild(pay)
  // }
  //   // }

  
  
  // getPayments()