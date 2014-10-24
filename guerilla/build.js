var browserify 		= require('browserify');
var fs 				= require('fs');
var maven 			= require('maven-deploy');
/*
if (fs.existsSync('./dist')) {
	var exec = require( 'child_process' ).exec;
	var path = './dist';

	exec( 'rm -r ' + path, function ( err, stdout, stderr ){
	fs.mkdirSync('dist');
		package();
		deploy();
	});
}

function package(){
	// Browserify everything
	var b = browserify();
	b.add('./lib/index.js');
	b.bundle().pipe(fs.createWriteStream('./dist/guerilla.js'));
}

function deploy(){*/
	console.log('sss')
	// Mavenify the built artifact into a war file
	var config = {
		"groupId": "com.dallokken",
		"buildDir": "dist",
		"type": "war",
		"fileEncoding": "UTF-8",
		"repositories": {
			"id": "some-external-repo",
			"url": "http://localhost/some-external-repo"
		}
	};
	maven.config(config);
	maven.install();
//}