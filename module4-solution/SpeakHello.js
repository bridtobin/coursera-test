// Module 4 Solution
(function (window) {
   var speakWord = "Hello";
   var helloSpeaker = {};
   helloSpeaker.speak=function(name) {
	  console.log(speakWord + " " + name);
	}
	window.helloSpeaker=helloSpeaker;
	}
)(window);
