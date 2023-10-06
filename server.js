const express = require('express');

const app = express();
const employeeRoute = require('./src/routes/employee.routes')
app.get('/', (req, res) => {
    res.send("THis IS FIRST API RESPONSE")
})

app.use('/api/v1/employee', employeeRoute)


app.listen('5000', () => {
    console.log("serve is running on port 5ooo");
})

