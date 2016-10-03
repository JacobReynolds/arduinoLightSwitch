var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {
		title: 'Express'
	});
});
var exec = require('child_process').exec;

/*These /on and /off endpoints work if the arduino is plugged in on the same server this process is running on.  That is not currently the situation.

router.post('/on', function (req, res) {
	var cmd = 'echo \'n\' > /dev/ttyACM0';
	exec(cmd, function (error, stdout, stderr) {
		if (error) {
			res.send("ERROR");
		} else {
			res.send("OK");
		}
	});
})

router.post('/off', function (req, res) {
	var cmd = 'echo \'f\' > /dev/ttyACM0';
	exec(cmd, function (error, stdout, stderr) {
		if (error) {
			res.send("ERROR");
		} else {
			res.send("OK");
		}
	});
})
*/
module.exports = router;
