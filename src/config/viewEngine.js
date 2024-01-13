const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    //ejs config
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    //static files config
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;