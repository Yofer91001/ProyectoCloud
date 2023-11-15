require('dotenv').config()
const express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
const app = express()
const port = 3000
var mongoose = require('mongoose');


//const { ObjectId } = require('mongodb');

mongoose.connect(`mongodb://admin:password@3.17.70.231:27017/?directConnection=true`,{maxPoolSize: 5}).then(db => console.log('conexion exitosa')).catch(err => console.log('error: ', err))
let schema = new mongoose.Schema({ nombre: String });
let person = mongoose.model('person', schema);




app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(express.static('./public'));
app.set('view engine', 'hbs')


app.get('/', function (req, res) {
  res.render('home', {
    titulo: 'Mi app'
  })
})

 
app.post('/info', function (req, res) {
  //var resultado;
  body = req.body
  //console.log(body['nombre'])
  
  let nuevo = new person({nombre:body['nombre']}); 
  nuevo.save()
  //console.log(resultado);
  //mongoose.connection.close();
  res.render('info', {tabla:'Personas'});
});

app.get('/info', function (req, res) {
  
  //console.log(resultado);
  res.render('info', {tabla:'Personas'});
});
 


app.get('*', function (req, res) {
    res.send('Wowwww, para donde vas')
  })

 



app.listen(port)
