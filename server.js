const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cros = require('cors')
/** var path = require('path'); **/

const api = require('./server/routing/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req, res, next) { 
     res.header('Access-Control-Allow-Origin', "*");
     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
     res.header('Access-Control-Allow-Headers', 'Content-Type'); 
     next();
     })

/** app.use(express.static(path.join(__dirname ,'/etudient.html'))) **/
app.use('/api',api);
console.log('na3ma3 fik 3al 3000');
app.listen(3000);