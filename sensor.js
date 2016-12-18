'use strict';

const sensor = require('node-dht-sensor');
const DHT_TYPE = 11;
const GPIO = 14;



function getH(){
	var h = sensor.read(DHT_TYPE, GPIO, function(e, t, h){
		console.log(`call sensor.read and return h: ${h}`);
		return h;
	});

	console.log(`call getH and return h: ${h}`);

	return h;
}

module.exports = getH;
