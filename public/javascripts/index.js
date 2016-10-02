//On and off got switched, don't want to reflash the arduino
$('#onSwitch').click(function () {
	$.post('http://10.0.0.183/off');
})
$('#offSwitch').click(function () {
	$.post('http://10.0.0.183/on');
})
$('#buzzHigh').click(function () {
	$.post('http://10.0.0.183/buzzHigh');
})
$('#buzzLow').click(function () {
	$.post('http://10.0.0.183/buzzLow');
})
$('#buzzRand').click(function () {
	$.post('http://10.0.0.183/buzzRand');
})
