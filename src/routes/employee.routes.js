import { Router } from 'express';
import { findAll } from '../controllers/employee.controller.js';
const router = Router();

router.get('/findAll', findAll);

export default router;