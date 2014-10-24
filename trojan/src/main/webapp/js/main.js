var request = require('browser-request');

request('http://apps.finn.no/api/', function(err, resp, bdy){
	console.log(JSON.stringify(bdy));
});
