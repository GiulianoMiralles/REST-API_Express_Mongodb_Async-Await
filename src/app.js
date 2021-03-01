const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const usersRoutes = require('../src/routes/users');

mongoose.connect('mongodb://localhost/REST-API_Express_Mongodb_Async-Await',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
    .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 3000); // check in my operating system if there is any resource that is already using port 3000 if not, it will be used by my application

//middleware
app.use(morgan('dev'));                 // It allows me to see all the http requests that I make on my server through consoles
app.use(bodyParser.json());             // It allows me to read the json formats that reach my server


//Routes
app.use('/users', usersRoutes);
//Static files

//error handlers

//Start the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});

