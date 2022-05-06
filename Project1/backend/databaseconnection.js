const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'mydb.czsq2slmneab.us-east-1.rds.amazonaws.com',
    database:'myDB',
    password:'Seinna@17',
    port:5432
});

module.exports=pool;