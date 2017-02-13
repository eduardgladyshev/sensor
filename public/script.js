'use script';

$.get('/sensor', function (data){
	$('#humidity .value').text(data.h);
	$('#temp .value').text(data.t);
});

google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Time');
	data.addColumn('number', 'Humidity');
	data.addColumn('number', 'Temp');

	$.get('/data', function(d){
		console.log(`arr from server: \n ${d}`);
		data.addRows(d);

		var chart = google.visualization.LineChart(document.getElementById('chart'));
		chart.draw(data, null);
	});
}