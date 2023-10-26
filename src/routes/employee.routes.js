import { Router } from 'express';
import { findAll, save, login } from '../controllers/employee.controller.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;
const router = Router();
const checkToken = (req, res, next) => {
    let token = req.get("authorization");
    console.log("TOKEN:", token);
    token = token.slice(7);
    verify(token, 'qwe12345e', (err, result) => {
        console.log(err);
        console.log(result);
        if (err) {
            return res.json({
                error: true,
                msg: 'INVALID TOKEN..'
            })
        }
        next();
    })


}

router.get('/findAll', checkToken, findAll);
router.post('/save', checkToken, save);
router.post('/login', login);

export default router;