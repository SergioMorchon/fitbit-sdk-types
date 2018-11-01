function callback(timestamp) {
	// Perform animation frame logic here

	// Request next frame
	requestAnimationFrame(callback);
}

requestAnimationFrame(callback);
