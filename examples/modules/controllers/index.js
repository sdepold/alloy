var foo = require("foo"),
	bar = require("vendor/bar");


// use the selector engine to find the first Label and set the text
$("Label")[0].text = bar.helloize(foo.generate());
