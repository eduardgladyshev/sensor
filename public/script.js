'use script';

//const getH = require('../sensor');

$.get(
	'/sensor',
	{},
	onAjaxSuccess,
	'json'
);


function onAjaxSuccess(data){
	$('#humidity').text(data.humidity);
}