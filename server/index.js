const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql2')


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: ''
})



app.get('/', (req,res) =>{
    res.send("Oiie ")
})

app.listen(3306, () => {
    console.log("server rodando na porta 3306")
} )

