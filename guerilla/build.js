var browserify 		= require('browserify');
var fs 				= require('fs');
var maven 			= require('maven-deploy');

if (!fs.existsSync('./build')) {
	fs.mkdirSync('build');
}

// Browserify everything
var b = browserify();
b.add('./lib/index.js');
b.bundle().pipe(fs.createWriteStream('./build/bundle.js'));

// Mavenify the built artifact into a war file
var config = {
	"groupId": "com.dallokken",
	"buildDir": "dist",
	"finalName": "trojan.war",
	"type": "war",
	"fileEncoding": "UTF-8",
	"repositories": {
		"id": "some-external-repo",
		"url": "http://localhost/some-external-repo"
	}
};
maven.config(config);
maven.install();
