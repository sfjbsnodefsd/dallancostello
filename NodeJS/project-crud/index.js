const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb',
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("successful connection ");
    } else console.log("DB connection failed " +JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log("Express server is running at port 3000"))

app.get('/getemployees', (req,res) => {
    mysqlConnection.query("select * from Employee", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else console.log(err);
    })
});

app.get('/getemployee/:id', (req,res) => {
    mysqlConnection.query("select * from Employee where EmpID = ?", [req.params.id], (err, rows, fields)=> {
        if(!err) {
            res.send(rows);
        }
        else console.log(err);
    })
});

app.delete('/deleteemployee/:id', (req, res) => {
    mysqlConnection.query("delete from Employee where EmpID = ?", [req.params.id], (err, rows, fields)=> {
        if(!err) {
            res.send("deleted successfully");
        }
        else console.log(err);
    })
});

app.post('/addemployee', (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @Salary = ?; CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode, @Salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields)=> {
        if(!err) {
            res.send(rows);
        }
        else console.log(err);
    })
});