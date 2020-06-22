console.log("=== module_pattern ===");

/*var MODULE =
(function() {
	console.log("module pattern");
	var box = {};
	box.count = 0;
	box.addCount = function() {
		return box.count += 1;
	}
	box.resetCount = function() {
		return box.count = 0;
	}

	return box;
})();*/

//Devolvendo ADD e RESET 
var MODULE =
(function() {
	"use strict";
	console.log("module pattern");
	var box = {};
	box.count = 0;
	box.addCount = function() {
		return box.count += 1;
	}
	box.resetCount = function() {
		return box.count = 0;
	}

	return {add: box.addCount, reset: box.resetCount};
})();