import dbCon from '../config/db.config.js'

var Employee = function (emp) {
    this.name = emp.name
};

export const findAllUser = function (req, result) {
    console.log("params", req.query);
    let { city } = req.query;
    console.log("city", city);
    dbCon.query('select * from user_info where city="' + city + '"', function (err, res) {

        result(err, res);
    })
}
export const findUserById = function (userid, result) {
    dbCon.query('select * from user_info where userid="' + userid + '"', function (err, res) {
        result(err, res);
    })
}
export const saveUser = function (req, result) {
    console.log("params", req);
    let userInfo = req;
    console.log("userInfo", userInfo);
    dbCon.query('insert into user_info (name,city,address,userid,password) values ("' + userInfo.name + '", "' + userInfo.city + '","' + userInfo.address + '","' + userInfo.userid + '","' + userInfo.password + '")', function (err, res) {
        console.log("err", err)
        console.log("res", res)
        result(err, res);
    })
}

export default Employee;
