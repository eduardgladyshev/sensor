'use strict';

const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const getHumidity = require('./sensor');

app.use(express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/sensor', function(req, res){

	var data = {
		humidity: ''
	}

	data.humidity = getHumidity();

	res.send(JSON.stringify(data));
});

app.listen(80);