require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const mysql = require('mysql2')

const app = express();
const hostname = process.env.PORT || 8081;
const port = process.env.PORT;

//ejs, static files config
configViewEngine(app);

//router routes
app.use('/v1', webRouter);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root', //default: empty string
    password: '12345678a',
    database: 'learnbe'
});

//simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log('results', results)
        console.log('fields', fields)
    }
)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
