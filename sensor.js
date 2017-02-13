'use strict';

const nodeSensor = require('node-dht-sensor');
const moment = require('moment');
const DHT_TYPE = 11;
const GPIO = 14;

class Sensor {
	constructor(){
		this.dataTable = [];
	}

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
				dataRow.push(moment().format('HH:mm'));
				dataRow.push(data.h);
				dataRow.push(data.t);

				if(self.dataTable.length >= 10){
					dataTable.shift()
				}
				
				dataTable.push(dataRow);

			}).catch(error => {
				console.log(error);
			});

			console.log(dataTable);
		}

		setInterval(writeDataRow, 60000);

	}

	getDataCollection(){
		return this.dataTable;
	}
}

let sensor = new Sensor();
sensor.startDataCollection();


module.exports = sensor;

