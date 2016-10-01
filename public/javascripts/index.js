$('#onSwitch').click(function () {
	$.post('http://10.0.0.183/on');
})
$('#offSwitch').click(function () {
	$.post('http://10.0.0.183/off');
})
