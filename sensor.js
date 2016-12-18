'use strict';

const sensor = requre('node-dht-sensor');
const DHT_TYPE = 11;
const GPIO = 14;



function getH(){
	var h = sensor.read(DHT_TYPE, GPIO, function(e, t, h){
		return t;
	});

	return h;
}

module.exports = getH;