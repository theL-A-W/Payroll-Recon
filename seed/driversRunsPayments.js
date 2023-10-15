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
}


const run = async () => {
    await main()
    db.close()
}
run()