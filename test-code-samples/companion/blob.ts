var debug = { hello: 'world' };
var blob = new Blob([JSON.stringify(debug, null, 2)], {
	type: 'application/json',
});

var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, { type: 'text/html' }); // the blob
