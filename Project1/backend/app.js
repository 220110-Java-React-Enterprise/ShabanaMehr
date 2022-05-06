const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const poolconn = require('./databaseconnection');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

//http://localhost:3001/registeruser
app.post('/registeruser',(req,res)=>{
    let {username,password,firstname, lastname,role} = req.body;
    poolconn.query('INSERT INTO users (username,password,firstname, lastname, role) VALUES ($1,$2,$3,$4,$5)', [username,password,firstname,lastname,role], (error,results) => {
        if(error){
            throw error;
        }
        res.status(201).send(`User added with Username: ${username}`);
    })
});


app.get('/username/:user',(req,res)=>{

    const user_name =req.params.user;
    poolconn.query('SELECT * FROM users WHERE username=$1',[user_name],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});

app.get('/role/:roleInfo',(req,res)=>{
    const userRole = req.params.roleInfo;
    poolconn.query('SELECT * FROM role WHERE role=$1',[userRole],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})