$('#onSwitch').click(function () {
	$.post('http://10.0.0.183/on');
})
$('#offSwitch').click(function () {
	$.post('http://10.0.0.183/off');
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
