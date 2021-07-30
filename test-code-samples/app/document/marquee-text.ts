import { document } from 'document';

let marquee = document.getElementById('marquee');

setTimeout(function () {
	marquee.state = 'enabled';
}, 2000);
