//Date function -- made with the help of chatGPT
//Past Pay dates

// Change this to the number of dates you want to calculate
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

//Next Pay Dates
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






async function getPayments() {
    const response = await axios.get(`http://localhost:3001/payments`)
    return response.data
}

async function displayPayments() {

    allPayments = await getPayments()
    console.log(allPayments)
    const displayContainer = document.getElementById('recentSubmits')
    const pastTotals = document.getElementById('pastTotals')
   
   
    allPayments.forEach(payment => {
        console.log(payment)

//Need to  import data to calculate "payment", or store data in created in another file and call it here


  
        // const sunday = 
        // const monday = 
        // const tuesday = 
        // const wednesday = 
        // const thursday = 
        // const friday =  
        // const saturday = 

//Calculation of payments
        // let weeklyPayments  = sunday + monday + tuesday + wednesday  + thurdsay + friday + saturday
        // console.log('You Earned:', runPay, 'For Run:', resId)

//Creating divs for payment array to dislay them
      const payDiv = document.createElement('div')
      payDiv.id = 'payDiv'
     displayContainer.appendChild(payDiv)

    
        payDiv.innerHTML =  
        `<p id="block">${payment.name}</p><p id="block">Earned: $${payment.total}</p><p id="block"> On date: ${payment.week_ending}</p><button id="edit"><i class="fa-regular fa-pen-to-square"  style="color: #e5cfa9;"></i></button><button id="delete"><i class="fa-solid fa-trash-can" style="color: #e5cfa9;"></i></button></p>`

    })
}

displayPayments()