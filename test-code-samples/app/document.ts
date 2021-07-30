import { document } from 'document';

document.addEventListener('pagescroll', (e) => {
	console.log(e.position);
});
const clickEventListener = (e: MouseEvent) => {
	console.log(e.screenX);
};
document.addEventListener('click', clickEventListener);
document.removeEventListener('click', clickEventListener);
