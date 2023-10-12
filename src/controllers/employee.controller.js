import { findAllUser } from '../models/employee.model.js';

export function findAll(req, res) {
    findAllUser(req, function (err, employee) {
        if (err) {
            res.json({ error: err, msg: 'Please try again!', data: [] });
        } else {
            res.json({ error: false, msg: '', data: employee });

        }
    })
    // const response = [
    //     { name: 'Mitesh', tech: 'react' },
    //     { name: 'Rajesh', tech: 'Node' },
    //     { name: 'Mahesj', tech: 'react' },
    //     { name: 'Rahul', tech: 'react' },
    //     { name: 'Jigar', tech: 'Node' },
    //     { name: 'Jitesh', tech: 'react' },
    // ]
    // res.send(response)
}