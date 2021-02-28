const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


//settings
app.set('port', process.env.PORT || 3000); //verifica en mi sistema operativo si hay algun recurso que ya ste usando el puerto 3000 si no es asi lo ocupara mi aplicacion

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


//Start the server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
});

