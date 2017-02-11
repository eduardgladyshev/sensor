'use strict';

const nodeSensor = require('node-dht-sensor');
const DHT_TYPE = 11;
const GPIO = 14;

let dataTable = [];

class Sensor {
	getCurrentData(){
		let promise = new Promise (resolve => {
			nodeSensor.read(DHT_TYPE, GPIO, (e, t, h) => {
				let data = {};
				data.h = h;
				data.t = t;

				resolve(data);
			});
		});

		return promise;
	} 

	startDataCollection(){
		let self = this;

		function writeDataRow(){
			let dataRow = [];

			self.getCurrentData().then(data => {
				dataRow.push(new Date());
				dataRow.push(data.h);
				dataRow.push(data.t);
				dataTable.push(dataRow);
				console.log(`dataRow pushed`);
			}).catch(error => {
				console.log(error);
			});

			console.log(dataTable);
		}

		setInterval(writeDataRow, 60000);

	}
}

let sensor = new Sensor();
sensor.startDataCollection();


module.exports = sensor;

