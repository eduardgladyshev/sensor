'use script';

// $.get('/sensor', function (data){
// 	$('#humidity .value').text(data.h);
// 	$('#temp .value').text(data.t);
// });

fetch('/sensor')
	.then(res => {
		return res.json();
	})
	.then(data => {
		document.querySelector('#humidity .value').innerHTML = data.h;
		document.querySelector('#temp .value').innerHTML = data.t;
	})
	.catch(error => {
		console.log(error);
	});

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Time');
	data.addColumn('number', 'Humidity');
	data.addColumn('number', 'Temp');

	fetch('/data').
		then(res => {
			return res.json();
		})
		.then(resData => {
			console.log(`arr from server: \n ${resData.push}`);
			console.log(data);
			data.addRows( resData );

			var chart = google.visualization.LineChart(document.getElementById('chart'));
			chart.draw(data, {width: 300, height: 200});
		})
		.catch(error => {
			console.log(error);
		});
}