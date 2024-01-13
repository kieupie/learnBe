require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');

const app = express();
const hostname = process.env.PORT || 8081;
const port = process.env.PORT;

//ejs, static files config
configViewEngine(app);

//router routes
app.use('/v1', webRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
