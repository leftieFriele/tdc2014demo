# Trondheim Developer Conference 2014 demo

This is just a project with the demo modules I used for my talk at Trondheim Developer Conference 2014.

It's not really all that usefull, I just needed to store them somewhere.

Content in these projects are from [Baconipsum](http://baconipsum.com/).

## Guerilla
This is a gueriall NodeJS module which produces a WAR-file which can be used inside exisiting Java Web Applications, but it also publishes as an npm module. It uses the [maven-deploy](https://www.npmjs.org/package/maven-deploy) module.

- lib
-- index.js - simple module which returns Bacone content from the JSON API

## Trojan
This is a Java Web Applciation which uses Node+NPM to package front-end assets.
It uses the [Maven Front-end plugin](https://github.com/eirslett/frontend-maven-plugin) to introduce the Node trojan horse.

### Running the sample
	
	$ cd trojan
	$ mvn clean install
	## Watch the Node awesomeness in the logs
	$ mvn -Dmaven.tomcat.port=9093 tomcat7:run-war
	Open http://localhost:9093/

You should now see a page displaying some Bacon content.

## Pre-requisits
- Node and NPM
- Maven, because otherwise you can't utilze Maven to build stuff
That's it..