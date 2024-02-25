const connection = require("db")

const queries = {
    allDepartments: function(){
        const sql = "SELECT * FROM Department"
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if(err){
                    reject(err)
                }
            })
        })
    },

    allRoles: function() {
        const sql = "SELECT * FROM role";
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } 
            })
        })
    }, 

    allEmployees: function(){
        const sql = "SELECT * FROM employee";
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } 
            })
        })
    }, 
    

    addDepartments: function(name){
        const sql = "INSERT INTO department (name) Values (?)";
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resole(results.insertId)
                }
            })
        })
    }, 

    addRole: function(title, salary, departmentId){
        const sql = "INSERT INTO role (title, salary, department_id) Values (?, ?, ?)";
        return new Promise((resolve, reject) => {
            connection.query(sql, [title, salary, departmentId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId)
                }
            })
        })
    }, 

    addEmployee: function(firstName, lastName, roleId, managerId){
        const sql = "INSERT INTO employee (firstName, lastName, roleId, managerId) Values (?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            connection.query(sql, [firstName, lastName, jobId, managerId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId)
                }
            })
        })
    }, 

}

module.exports = queries