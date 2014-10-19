var request = require('request');

module.exports = function(){
	request('http://baconipsum.com/api/?type=meat-and-filler', function(error, resp, body){
		return body;
	})
}