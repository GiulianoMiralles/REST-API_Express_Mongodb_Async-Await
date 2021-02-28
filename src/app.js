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
app.set('port', process.env.PORT || 3000); //verifica en mi sistema operativo si hay algun recurso que ya ste usando el puerto 3000 si no es asi lo ocupara mi aplicacion

//middleware
app.use(morgan('dev'));                 //Me permite ver por consolas todas las peticiones http que hago en mi servidor
app.use(bodyParser.json());             //Me permite leer los formatos json que llegan a mi servidor


//Routes
app.use('/users', usersRoutes);
//Static files

//error handlers

//Start the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});

