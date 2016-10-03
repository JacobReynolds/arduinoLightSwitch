//On and off got switched, don't want to reflash the arduino at the moment
$('#onSwitch').click(function () {
	$.post('http://10.0.0.183/off');
})
$('#offSwitch').click(function () {
	$.post('http://10.0.0.183/on');
})
