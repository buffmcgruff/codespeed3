$(document).ready(function(){

	var listener = new window.keypress.Listener();

	listener.simple_combo("shift s", function() {
	    console.log("You pressed shift and s");
	});

	// There are also a few other shortcut methods:

	// If we want to register a counting combo
	listener.counting_combo("tab space", function(e, count) {
	    console.log("You've pressed this " + count + " times.");
	});

	// If you want to register a sequence combo
	listener.sequence_combo("up up down down left right left right b a enter", function() {
	    lives = 30;
	}, true);

});



// var secondsCount = 0;

// function addOneSecond() {
// 	secondsCount += 1;
// 	console.log(secondsCount);
// 	return secondsCount;
// }

// setInterval(addOneSecond, 1000);


