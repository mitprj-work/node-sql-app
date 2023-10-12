import express from 'express';
import employeeRoute from './src/routes/employee.routes.js';

const app = express();
import cors from 'cors';
app.use(cors());
app.get('/', (req, res) => {
    res.send("THis IS FIRST API RESPONSE")
})

app.use('/api/v1/employee', employeeRoute)


app.listen('5000', () => {
    console.log("serve is running on port 5ooo");
})

