'use strict';

const express = require('express');
const app = express();
const sensor = require('./sensor');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/sensor', function(req, res){

	sensor.getCurrentData().then(data => {
		console.log(data);
		res.send(JSON.stringify(data));
	}).catch(error => console.log(error) );

});

app.listen(3000);
