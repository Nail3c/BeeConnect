var express = require('express')
var app = express()
app.use(express.static('../front'))
var fs = require('fs')

/*data = {
	temp:0,
	humi:0,
	rain:0,
	weig:0}*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/data', (request, response, next)=>{
	var data = JSON.parse(fs.readFileSync('data.json'))
	response.json(data); 
	console.log('une requete a été recue                      '+data)
})


module.exports = app