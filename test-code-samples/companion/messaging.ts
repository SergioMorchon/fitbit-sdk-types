import { peerSocket } from 'messaging';
console.log('Max message size=' + peerSocket.MAX_MESSAGE_SIZE);
if (peerSocket.readyState === peerSocket.OPEN) {
	peerSocket.send('Hello');
}
