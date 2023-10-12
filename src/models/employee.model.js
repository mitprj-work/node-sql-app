import dbCon from '../config/db.config.js'

var Employee = function (emp) {
    this.name = emp.name
};

export const findAllUser = function (req, result) {
    console.log("params", req.query);
    let { city } = req.query;
    console.log("city", city);
    dbCon.query('select * from user_info where city="' + city + '"', function (err, res) {
        console.log("err", err)
        console.log("res", res)
        result(err, res);
    })
}

export default Employee;
