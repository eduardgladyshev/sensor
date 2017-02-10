'use strict';

if(process.env.USER == "pi"){
	const nodeSensor = require('node-dht-sensor');
};

const DHT_TYPE = 11;
const GPIO = 14;


class Sensor {	
	getHumidity(){
		var promise = new Promise (resolve => {

			if(process.env.USER == 'pi'){
				nodeSensor.read(DHT_TYPE, GPIO, (e, t, h) => {
					var data = {};
					data.h = h;
					data.t = t;
					resolve(data);
				});	
			}

			resolve({h: 30, t: 25});

		});

		return promise;
	} 
}


module.exports = new Sensor();

