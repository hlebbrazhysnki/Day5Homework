const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


    //express app
    const app = express();

    // connect to mongodb
    const dbURI = "mongodb+srv://glebbrazhynski:gleb200217@note-tuts.blogs.9rd8w.mongodb.net/node-tuts.blogs?retryWrites=true&w=majority";
    mongoose.connect(dbuRI, { useNewUrlParser: true,useUnitifiedTopology: true });
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err)); 

    //register view engine

    app.set('view engine', ejs);

    //listen for requests

    app.listen(3000);

    // middleware & static files

    app.use(express.static('public'));
    app.use(morgan('dev'));

    // mongoose and mongo sandbox routes
    app.get('/add-blog', (req, res) => {
        const blog = new Blog({
            title: 'new blog',
            snipper: 'about my new blog'
            body: 'more about my new blog'
        });

        blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
    });

    app.get('/all-blogs', (re, res) => {
        Blog.find()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    app.get('single-blog', (req, res ) => {
        Blog.findById()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
    })

    app.get('/', (req, res) => {
        const blog [
            {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectetur'},
            {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectetur'},
            {title: 'How to degeat bowser', snippet: 'lorem ipsum dolor sit amet consectetur'},

        ];
        res.render('index', {title: 'Home', blogs});


    })