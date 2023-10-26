import { findAllUser, saveUser, findUserById } from '../models/employee.model.js';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import pkg from 'jsonwebtoken';
const { sign } = pkg;

export function findAll(req, res) {
    findAllUser(req, function (err, employee) {
        if (err) {
            res.json({ error: err, msg: 'Please try again!', data: [] });
        } else {
            res.json({ error: false, msg: '', data: employee });

        }
    })
}
export function save(req, res) {
    const salt = genSaltSync(10);
    const { userInfo } = req.body.data;
    userInfo.password = hashSync(userInfo.password, salt);
    saveUser(userInfo, function (err, employee) {
        console.log("THIS IS SAVE CONTROLLER")
        if (err) {
            res.json({ error: err, msg: 'Please try again!', data: [] });
        } else {
            res.json({ error: false, msg: '', data: employee });

        }
    })

}

export function login(req, res) {
    let { userInfo } = req.body.data
    findUserById(userInfo.userid, function (err, user) {
        if (err) {
            res.json({ error: err, msg: 'Please try again!', data: [] });
        } else {
            console.log(user);
            if (user.length === 0) {
                res.json({ error: false, msg: 'Unvalid Username', data: [] });
            } else {
                let passwordResult = compareSync(userInfo.password, user[0].password)
                if (passwordResult) {
                    let userinfo = user[0];
                    userinfo.password = undefined;
                    const token = sign({ result: userinfo }, 'qwe12345e', { expiresIn: '1d' })
                    userinfo['token'] = token;
                    res.json({ error: false, msg: 'login in success', data: userinfo });
                } else {
                    res.json({ error: false, msg: 'Unvalid password', data: [] });
                }
            }
        }
    })
}