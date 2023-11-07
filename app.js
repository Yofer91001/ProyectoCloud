require('dotenv').config()
const express = require('express');
let path = require('path');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(express.static('./public'));
app.set('view engine', 'hbs')





app.get('/', function (req, res) {
  res.render('home', {
    titulo: 'Cliente'
  })
})





app.get('/info', function (req, res) {
  
      res.render('info');
});
 


app.get('*', function (req, res) {
    res.send('Wowwww, para donde vas')
  })

 



app.listen(port)