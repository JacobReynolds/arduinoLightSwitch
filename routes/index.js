var express = require('express');
var router = express.Router();
var http = require('http');
var querystring = require('querystring');
var switchDomain = {
	host: process.env.SWITCH_IP,
	method: "POST",
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

/* GET home page. */
router.get('/' + process.env.HIDDEN_URL_BAD_SECURITY, function (req, res) {
	res.render('index', {
		secretURL: process.env.HIDDEN_URL_BAD_SECURITY
	});
});
var exec = require('child_process').exec;

router.post("/" + process.env.HIDDEN_URL_BAD_SECURITY + '/on', function (req, res) {
	var postData = {
		apiKey: process.env.SWITCH_API_KEY,
	}
	switchDomain.path = '/on';
	postData = querystring.stringify(postData);
	switchDomain.headers['Content-Length'] = Buffer.byteLength(postData);
	var req = http.request(switchDomain, null);
	req.write(postData);
	req.end();
	res.redirect('/' + process.env.HIDDEN_URL_BAD_SECURITY);
})
router.post("/" + process.env.HIDDEN_URL_BAD_SECURITY + '/off', function (req, res) {
	var postData = {
		apiKey: process.env.SWITCH_API_KEY,
	}
	switchDomain.path = '/off';
	postData = querystring.stringify(postData);
	switchDomain.headers['Content-Length'] = Buffer.byteLength(postData);
	var req = http.request(switchDomain, null);
	req.write(postData);
	req.end();
	res.redirect('/' + process.env.HIDDEN_URL_BAD_SECURITY);
})

module.exports = router;
