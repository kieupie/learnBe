require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

const app = express();
const hostname = process.env.HOST_NAME || 8080;
const port = process.env.PORT;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//ejs, static files config
configViewEngine(app);

//router routes
// app.use('/v1', webRouter);
app.use('/', webRouter);


//simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('This is results', results);
        console.log('This is fields', fields);
    }
);


app.listen(port, hostname, () => {
    console.log(`App listening on ${hostname}:${port}`);
});

