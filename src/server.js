const express = require('express')
require('dotenv').config()
const path = require('path')

const app = express()
const hostname = process.env.PORT || 8081
const port = process.env.PORT

//ejs config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sample', (req, res) => {
    res.render('sample')
})

app.listen(hostname, port, () => {
    console.log(`App listening on port ${port}`)
})
