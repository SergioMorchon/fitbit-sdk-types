import { document } from 'document';

let demo = document.getElementById('demo') as GraphicsElement;
demo.style.display = 'none';
demo.style.display = 'inline';

// Toggle Show/Hide
function toggle(ele: typeof demo) {
	ele.style.display = ele.style.display === 'inline' ? 'none' : 'inline';
}

toggle(demo); // hidden
toggle(demo); // visible
