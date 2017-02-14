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
		.then(data => {
			console.log(`arr from server: \n ${d}`);
			data.addRows(d);

			var chart = google.visualization.LineChart(document.getElementById('chart'));
			chart.draw(data, null);
		});
}