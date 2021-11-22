const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

//connect to mongodb
const dbURI = 
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connect to db'))
    .catch()

    //register view engine
    app.set('view engine', ejs);

    //listen for requests
    app.listen(3000);

    app.use(express.static('public'));
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        const blog [
            {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
            {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
            {title: 'How to degeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'},

        ];
        res.render('index', {title: 'Home', blogs});


    })