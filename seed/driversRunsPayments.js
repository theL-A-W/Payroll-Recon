const db = require('../db/index')
const { Driver, Run, Payment } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
        const drivers = [
            {
                emp_name: 'Lindsay Walker',
                availability: 'part-time',
                emp_email: 'lindsay@bedriven.com',
                emp_pass: 'Password',
                has7D: false,
                hasDOT: false
            },
            {
                emp_name: 'Gina Walker',
                availability: 'full-time',
                emp_email: 'gina@bedriven.com',
                emp_pass: 'Password123',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'John Johnson',
                availability: 'part-time',
                emp_email: 'employee1@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'Albert Smith',
                availability: 'full-time',
                emp_email: 'employee2@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'Kim Brown',
                availability: 'full-time',
                emp_email: 'employee3@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'Micheal Jones',
                availability: 'part-time',
                emp_email: 'employee4@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'Frank Miller',
                availability: 'full-time',
                emp_email: 'employee5@bedriven.com',
                emp_pass: 'Password',
                has7D: true,
                hasDOT: true
            },
            {
                emp_name: 'Paula Anderson',
                availability: 'full-time',
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
                emp_name: 'Paula Anderson',
                baseFare: 150,
                surcharge: 20,
                bags: 10,
                gratuity: 20,
                waiting: 0,
                date: '10/09/2023',
                resId: 'NS12009'
            },
            {
                emp_name: 'Gina Walker',
                baseFare: 115,
                surcharge: 0,
                bags: 5,
                gratuity: 30,
                waiting: 0,
                date: '8/18/2023',
                resId: 'NS12019'
            },
            {
                emp_name: 'Lindsay Walker',
                baseFare: 388,
                surcharge: 20,
                bags: 0,
                gratuity: 100,
                waiting: 5,
                date: '1/8/2021',
                resId: 'NS12019'
            },
            {
                emp_name: 'Lindsay Walker',
                baseFare: 90,
                surcharge: 0,
                bags: 0,
                gratuity: 20,
                waiting: 0,
                date: '4/5/2022',
                resId: 'NS12019'
            }

        ]
        await Run.insertMany(runs)
        console.log("Created some runs")

        const payments = [
            {
                emp_name: 'Lindsay Walker',
                week_ending: '05/24/2023',
                totalAmount: 1220,
                reimbursements: 0
            },
            {
                emp_name: 'Paula Anderson',
                week_ending: '03/02/2022',
                totalAmount: 1150,
                reimbursements: 20
            }
            
        ]
            await Payment.insertMany(payments)
        console.log("Created some Payments")


}   




const runSeed = async () => {
    await main()
    db.close()
}
runSeed()