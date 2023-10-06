const express = require('express');

const router = express.Router();
const employeeController = require('../controllers/employee.controller')

router.get('/findAll', employeeController.findAll);

module.exports = router;