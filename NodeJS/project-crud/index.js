const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employeedb",
  multipleStatements:true
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("sucessful connection ");
  } else console.log("DB connection failed " + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log("Express server is running at port 3000"));



// get all employees
app.get('/getemployees',(req,res) => {
    mysqlConnection.query("select * from Employee", (err, rows, feilds) => {
        if(!err) {
           res.send(rows);
        } else console.log(err);
    } )
})
// get employee by id 
app.get('/getemployee/:id' , (req,res) => {
    mysqlConnection.query("select * from Employee where EmpID = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else console.log(err);
    })
})


//delete employee by id 
app.delete("/deleteemployee/:id" , (req, res) => {
    mysqlConnection.query("DELETE FROM Employee WHERE EmpID = ?" , [req.params.id], (err,rows,fields) => {
        if(!err) {
           res.send("employee deleted sucessfully")
        } else console.log(err);
    })
});

//insert an employee
app.post("/addemployee" , (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.Salary] , (err,rows,fields) => {
        if(!err) rows.forEach(element => {
            if(element.constructor == Array)
            res.send("Employee Id of the inserted employee is : " +element[0].EmpID);
        });
        //    res.send(rows)
         else console.log(err);
    })
});


// update employee 
app.put("/updateemployee" , (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.Salary] , (err,rows,fields) => {
        if(!err) 
        res.send("Employee updated sucessfully")
        //    res.send(rows)
         else console.log(err);
    })
});







 
