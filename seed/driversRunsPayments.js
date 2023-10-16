const db = require('../db/index')
const { Driver, Run, Payment } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
        const drivers = [
            {
                name: 'Lindsay Walker',
                availability: 'part-time',
                emp_email: 'lindsay@bedriven.com',
                emp_pass: 'Password',
                has7D: false,
                hasDOT: false
            },
            {
                name: 'Gina Walker',
                availability: 'part-time',
                emp_email: 'gina@bedriven.com',
                emp_pass: 'Password123',
                has7D: true,
                hasDOT: true
            },
            {
                name: 'Random Employee1',
                availability: 'part-time',
                emp_email: 'employee1@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                name: 'Random Employee2',
                availability: 'part-time',
                emp_email: 'employee2@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                name: 'Random Employee3',
                availability: 'part-time',
                emp_email: 'employee3@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                name: 'Random Employee4',
                availability: 'part-time',
                emp_email: 'employee4@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                name: 'Random Employee5',
                availability: 'part-time',
                emp_email: 'employee5@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            }
        ]

        await Driver.insertMany(drivers)
        console.log("Created some drivers")

        const runs = [
            {
                baseFare: 150,
                surcharge: 20,
                bags: 10,
                gratuity: 20,
                waiting: 0,
                other: 20
            },
            {
                baseFare: 115,
                surcharge: 0,
                bags: 5,
                gratuity: 30,
                waiting: 0,
                other: 0
            }
        ]
        await Run.insertMany(runs)
        console.log("Created some runs")

        const payments = [
            {
                emp_id: drivers[0]._id, // Associate payment with the first driver
                run_id: runs[0]._id, // Associate payment with the first run
                totalAmount: 220,
                reimbursements: 0
            },
            {
                emp_id: drivers[1]._id, // Associate payment with the second driver
                run_id: runs[1]._id, // Associate payment with the second run
                totalAmount: 150,
                reimbursements: 20
            },
            
        ]
            await Payment.insertMany(payments)
        console.log("Created some Payments")


}   




const runSeed = async () => {
    await main()
    db.close()
}
runSeed()