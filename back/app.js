var express = require('express')
var app = express()
app.use(express.static('../front'))
var fs = require('fs')
var data = fs.readFileSync('data.json')
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/data', (request, response, next)=>{
	response.json(JSON.stringify(data)); 
	console.log('une requete a été recue')
})


module.exports = app