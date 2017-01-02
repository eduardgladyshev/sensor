'use script';

$.get('/sensor', {}, onAjaxSuccess, 'json');

function onAjaxSuccess(data){
	$('#humidity .value').text(data.h);
	$('#temp .value').text(data.t);
}