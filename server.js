'use strict';

const express = require('express');
const app = express();
const sensor = require('./sensor');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/sensor', function(req, res){

	sensor.getHumidity().then(data => {
		console.log(data);
		res.send(JSON.stringify(data));
	});

});

app.listen(3000);
