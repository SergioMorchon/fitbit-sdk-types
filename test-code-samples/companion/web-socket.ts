// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
	socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
	console.log('Message from server ', event.data);
});

var exampleSocket = new WebSocket(
	'wss://www.example.com/socketserver',
	'protocolOne',
);
var exampleSocket = new WebSocket('wss://www.example.com/socketserver', [
	'protocolOne',
	'protocolTwo',
]);
exampleSocket.send("Here's some text that the server is urgently awaiting!");
exampleSocket.onopen = function (event) {
	exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
exampleSocket.onmessage = function (event) {
	console.log(event.data);
};
exampleSocket.close();

exampleSocket.send(new Blob(['some data here']));
